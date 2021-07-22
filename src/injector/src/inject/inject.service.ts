import { Injectable } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CoreService } from './core.service'

@Injectable()
export class InjectService {
  constructor(private readonly coreService: CoreService) {}
}
