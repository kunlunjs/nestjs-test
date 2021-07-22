import type { CanActivate, ExecutionContext } from '@nestjs/common'
import { Injectable, Scope } from '@nestjs/common'
import type { Observable } from 'rxjs'

@Injectable({ scope: Scope.TRANSIENT })
export class RequestScopeGuard implements CanActivate {
  static COUNTER = 0
  constructor() {
    RequestScopeGuard.COUNTER++
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true
  }
}
