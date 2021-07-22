import type { ArgumentMetadata, PipeTransform } from '@nestjs/common'
import { Inject, Injectable } from '@nestjs/common'
import type { UsersService } from './users.service'

@Injectable()
export class UserByIdPipe implements PipeTransform<string> {
  static COUNTER = 0
  static REQUEST_SCOPED_DATA = []

  constructor(
    @Inject('REQUEST_ID') private readonly requestId: number,
    private readonly usersService: UsersService
  ) {
    UserByIdPipe.COUNTER++
  }

  transform(value: string, metadata: ArgumentMetadata) {
    UserByIdPipe.REQUEST_SCOPED_DATA.push(this.requestId)
    return this.usersService.findById(value)
  }
}
