import type { Logger } from '@nestjs/common'
import { Inject, Injectable, Scope } from '@nestjs/common'
import { INQUIRER, REQUEST } from '@nestjs/core'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Request } from 'express'

@Injectable({
  scope: Scope.TRANSIENT
})
export class RequestLogger {
  config: Record<string, any>

  constructor(
    @Inject(INQUIRER) { constructor },
    @Inject(REQUEST) private readonly request /*: Request*/,
    private readonly logger: Logger
  ) {
    this.config = (constructor && constructor.logger) || {}
  }

  get requestId() {
    if (!this.request.id) {
      this.request.id = `${Date.now()}.${Math.floor(Math.random() * 1000000)}`
    }
    return this.request.id
  }

  log(message: string) {
    this.logger.log({ message, requestId: this.requestId, ...this.config })
  }
}
