import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor
} from '@nestjs/common'
import { Inject, Injectable, Scope } from '@nestjs/common'
import type { Observable } from 'rxjs'

@Injectable({ scope: Scope.REQUEST })
export class LoggingInterceptor implements NestInterceptor {
  static COUNTER = 0
  static REQUEST_SCOPED_DATA = []

  constructor(@Inject('REQUEST_ID') private readonly requestId: number) {
    LoggingInterceptor.COUNTER++
  }

  intercept(context: ExecutionContext, call: CallHandler): Observable<any> {
    LoggingInterceptor.REQUEST_SCOPED_DATA.push(this.requestId)
    return call.handle()
  }
}
