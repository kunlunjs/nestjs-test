import { Module } from '@nestjs/common'
import { ExportsService } from './exports.service'

/**
 * 只 exports 不 providers
 */
@Module({
  exports: [ExportsService]
})
export class ExportsModule {}
