import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import { TransientScopetGuard } from './guards/transient-scoped.guard'
import { LoggingInterceptor } from './interceptors/logging.interceptor'
import { UserByIdPipe } from './users/user-by-id.pipe'

@Controller('test')
export class TestController {
  @UseGuards(TransientScopetGuard)
  @UseInterceptors(LoggingInterceptor)
  @Get()
  greeting(@Param('id', UserByIdPipe) id): string {
    return 'hey'
  }
}
