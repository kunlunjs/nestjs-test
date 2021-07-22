import type { CanActivate, ExecutionContext } from '@nestjs/common'
import { Inject, Injectable, Scope } from '@nestjs/common'
import type { Observable } from 'rxjs'

@Injectable({ scope: Scope.REQUEST })
export class RequestScopeGuard implements CanActivate {
  static COUNTER = 0
  static REQUEST_SCOPED_DATA = []

  constructor(@Inject('REQUEST_ID') private readonly requestId: number) {
    RequestScopeGuard.COUNTER++
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    RequestScopeGuard.REQUEST_SCOPED_DATA.push(this.requestId)
    return true
  }
}
