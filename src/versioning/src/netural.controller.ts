import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common'

@Controller({
  version: VERSION_NEUTRAL
})
export class VersionNeturalController {
  @Get('/neutral')
  netural() {
    return 'Neutral'
  }
}
