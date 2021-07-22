import { Module } from '@nestjs/common'
import { DatabaseModule } from './database.module'
import { PhotoModule } from './photo/photo.module'

@Module({
  // forRoot 自动读取 ormconfig.json
  imports: [DatabaseModule.forRoot(), PhotoModule]
})
export class AsyncApplicationModule {}
