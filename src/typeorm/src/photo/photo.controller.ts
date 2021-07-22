import { Controller, Get, Post } from '@nestjs/common'
import type { PhotoEntity } from './photo.entity'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { PhotoService } from './photo.service'

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<PhotoEntity[]> {
    return this.photoService.findAll()
  }

  @Post()
  create(): Promise<PhotoEntity> {
    return this.photoService.create()
  }
}
