import type { DynamicModule, Provider } from '@nestjs/common'
import { Inject, Module, Scope } from '@nestjs/common'
import { HelloController } from './hello-controller'
import { HelloService } from './hello.service'
import { HttpController } from './http.controller'
import { UsersService } from './users/users.service'

@Module({
  controllers: [HelloController, HttpController],
  providers: [
    HelloService,
    UsersService,
    {
      provide: 'REQUEST_ID',
      useFactory: () => 1,
      scope: Scope.REQUEST
    }
  ]
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
