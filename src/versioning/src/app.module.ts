import { Module } from '@nestjs/common'
import { AppV1Controller } from './app-v1.controller'
import { AppV2Controller } from './app-v2.controller'
import { MultipleVersionController } from './multiple.controller'
import { VersionNeturalController } from './netural.controller'
import { OverridePartialController } from './override-partial.controller'
import { OverrideController } from './override.controller'

@Module({
  imports: [],
  controllers: [
    AppV1Controller,
    AppV2Controller,
    MultipleVersionController,
    VersionNeturalController,
    OverrideController,
    OverridePartialController
  ]
})
export class AppModule {}
