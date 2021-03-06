import { Controller, Get } from '@nestjs/common'

@Controller({
  version: '1'
})
export class AppV1Controller {
  @Get('/')
  helloWorld() {
    return 'Hello World V1!'
  }

  @Get('/:param/hello')
  paramV1() {
    return 'Parameter V1!'
  }
}
