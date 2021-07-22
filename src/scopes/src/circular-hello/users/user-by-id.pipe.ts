import type { ArgumentMetadata, PipeTransform } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { UsersService } from './users.service'

@Injectable()
export class UserByIdPipe implements PipeTransform<string> {
  static COUNTER = 0

  constructor(private readonly userService: UsersService) {
    UserByIdPipe.COUNTER++
  }

  transform(value: string, metadata: ArgumentMetadata) {
    return this.userService.findById(value)
  }
}
