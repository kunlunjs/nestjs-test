import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { LoggingInterceptor } from './interceptors/logging.interceptor'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { RequestChainService } from './request-chain.service'

@Controller('hello')
export class RequestChainController {
  constructor(private readonly chainService: RequestChainService) {}

  @UseInterceptors(LoggingInterceptor)
  @Get()
  greeting(): void {
    this.chainService.call()
  }
}
