import { Injectable, Scope } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { LoggerService } from './logger.service'

@Injectable({
  scope: Scope.REQUEST
})
export class RequestLoggerService {
  constructor(public loggerService: LoggerService) {}
}
