// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Logger } from '@nestjs/common'
import { Inject, Injectable, Scope } from '@nestjs/common'
import { INQUIRER } from '@nestjs/core'

@Injectable({
  scope: Scope.TRANSIENT
})
export class TransientLogger {
  @Inject(INQUIRER) inquirer: any = null
  config: Record<string, any>

  constructor(
    @Inject(INQUIRER) private readonly inquireInCtor,
    private readonly logger: Logger
  ) {
    this.config =
      (inquireInCtor.constructor && inquireInCtor.constructor.logger) || {}
  }

  log(message: string) {
    this.logger.log({ message, ...this.config })
  }
}
