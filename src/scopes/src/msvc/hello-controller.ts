import { Controller, UseGuards, UseInterceptors } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { RequestScopeGuard } from './guards/request-scoped.guard'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HelloService } from './hello.service'
import { LoggintInterceptor } from './interceptors/logging.interceptor'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { UsersService } from './users/users.service'

@Controller()
export class HelloController {
  static COUNTER = 0
  constructor(
    private readonly helloService: HelloService,
    private readonly usersService: UsersService
  ) {
    HelloController.COUNTER++
  }

  @UseGuards(RequestScopeGuard)
  @UseInterceptors(LoggintInterceptor)
  @MessagePattern('test')
  greeting(): string {
    return this.helloService.greeting()
  }
}
