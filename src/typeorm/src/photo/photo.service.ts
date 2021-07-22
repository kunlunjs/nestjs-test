import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PhotoEntity } from './photo.entity'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Repository } from 'typeorm'

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photoRepository: Repository<PhotoEntity>
  ) {}

  async findAll(): Promise<PhotoEntity[]> {
    return this.photoRepository.find()
  }

  async create(): Promise<PhotoEntity> {
    const photoEntity = new PhotoEntity()
    photoEntity.name = 'Nest'
    photoEntity.description = 'Is great!'
    photoEntity.views = 6000

    return this.photoRepository.create(photoEntity)
  }
}
