import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor
} from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import type { Observable } from 'rxjs'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HelperService } from '../helper/helper.service'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly helperSvc: HelperService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.helperSvc.noop()
    if (!this.helperSvc.request) {
      throw new Error('error')
    }
    return next.handle()
  }
}
