import type { ArgumentMetadata, PipeTransform } from '@nestjs/common'
import { Injectable, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.TRANSIENT })
export class UserByIdPipe implements PipeTransform<string> {
  static COUNTER = 0
  constructor() {
    UserByIdPipe.COUNTER++
  }

  transform(value: string, metadata: ArgumentMetadata) {
    return value
  }
}
