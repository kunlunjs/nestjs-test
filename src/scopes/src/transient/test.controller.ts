import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import { RequestScopeGuard } from './guards/request-scoped.guard'
import { LoggingInterceptor } from './interceptors/logging.interceptor'
import { UserByIdPipe } from './users/user-by-id.pipe'

@Controller('test')
export class TestController {
  @UseGuards(RequestScopeGuard)
  @UseInterceptors(LoggingInterceptor)
  @Get()
  greeting(@Param('id', UserByIdPipe) id): string {
    return 'hey'
  }
}
