import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import { RequestScopeGuard } from './guards/request-scoped.guard'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HelloService } from './hello.service'
import { LoggingInterceptor } from './interceptors/logging.interceptor'
import { UserByIdPipe } from './users/user-by-id.pipe'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { UsersService } from './users/users.service'

@Controller('hello')
export class HelloController {
  static COUNTER = 0
  constructor(
    private readonly helloService: HelloService,
    private readonly usersService: UsersService
  ) {
    HelloController.COUNTER++
  }

  @UseGuards(RequestScopeGuard)
  @UseInterceptors(LoggingInterceptor)
  @Get()
  greeting(@Param('id', UserByIdPipe) id): string {
    return this.helloService.greeting()
  }
}
