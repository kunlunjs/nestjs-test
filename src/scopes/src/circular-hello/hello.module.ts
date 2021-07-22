import type { DynamicModule, Provider } from '@nestjs/common'
import { Inject, Module } from '@nestjs/common'
import { HelloController } from './hello.controller'
import { HelloService } from './hello.service'
import { UsersService } from './users/users.service'

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [UsersService, HelloService]
})
export class HelloModule {
  constructor(@Inject('META') private readonly meta) {}

  static forRoot(meta: Provider): DynamicModule {
    return {
      module: HelloModule,
      providers: [meta]
    }
  }
}
