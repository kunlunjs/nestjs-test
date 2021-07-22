import type { DynamicModule, Provider } from '@nestjs/common'
import { Inject, Module, Scope } from '@nestjs/common'
import { HelloService } from './hello.service'
import { HelloController } from './hello.controller'
import { UsersService } from './users/users.service'

@Module({
  controllers: [HelloController],
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

  // 在根模块注册
  /*
  HelloModule.forRoot({
    provide: 'META',
    useValue: true
  })
  */
  static forRoot(meta: Provider): DynamicModule {
    return {
      module: HelloModule,
      providers: [meta]
    }
  }
}
