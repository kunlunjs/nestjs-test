import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor
} from '@nestjs/common'
import { Injectable, Scope } from '@nestjs/common'
import type { Observable } from 'rxjs'

@Injectable({ scope: Scope.REQUEST })
export class LoggingInterceptor implements NestInterceptor {
  static COUNTER = 0
  constructor() {
    LoggingInterceptor.COUNTER++
  }

  intercept(context: ExecutionContext, call: CallHandler): Observable<any> {
    return call.handle()
  }
}
