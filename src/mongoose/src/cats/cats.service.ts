import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Model } from 'mongoose'
import type { CreateCatDto } from './dto/create-cat.dto'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Cat } from './interfaces/cat.interface'

@Injectable()
export class CatsService {
  constructor(
    @InjectModel('Cat')
    private readonly catModel: Model<Cat>
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new this.catModel(createCatDto)
    return cat.save()
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }
}
