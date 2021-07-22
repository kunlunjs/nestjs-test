import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HelloService } from './hello.service'
import { UserByIdPipe } from './users/user-by-id.pipe'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { UsersService } from 'src/hello-world/src/hello/users/users.service'
import { RequestScopedGuard } from './guards/request-scoped.guard'
import { LoggingInterceptor } from './interceptors/logging.interceptor'

@Controller('hello')
export class HelloController {
  static COUNTER = 0

  constructor(
    private readonly helloService: HelloService,
    private readonly usersService: UsersService
  ) {}

  @UseGuards(RequestScopedGuard)
  @UseInterceptors(LoggingInterceptor)
  @Get()
  greeting(@Param('id', UserByIdPipe) id: string) {
    return this.helloService.greeting()
  }
}
