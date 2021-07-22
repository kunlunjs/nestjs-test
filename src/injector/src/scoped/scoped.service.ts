import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Request } from 'express'

@Injectable({
  scope: Scope.REQUEST
})
export class ScopedService {
  // 获取原始请求对象
  // https://docs.nestjs.com/fundamentals/injection-scopes#injection-scopes
  constructor(@Inject(REQUEST) public readonly request: Request) {}
}
