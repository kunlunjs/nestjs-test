import { Body, Controller, Get, Post } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CatsService } from './cats.service'
import type { CreateCatDto } from './dto/create-cat.dto'
import type { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll()
  }
}
