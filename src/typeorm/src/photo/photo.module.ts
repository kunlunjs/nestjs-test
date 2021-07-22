import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PhotoController } from './photo.controller'
import { PhotoEntity } from './photo.entity'
import { PhotoService } from './photo.service'

@Module({
  imports: [TypeOrmModule.forFeature([PhotoEntity])],
  providers: [PhotoService],
  controllers: [PhotoController]
})
export class PhotoModule {}
