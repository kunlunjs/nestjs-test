import { Injectable } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HelperService } from './helper/helper.service'

@Injectable()
export class RequestChainService {
  static COUNTER = 0
  constructor(private readonly helperService: HelperService) {
    helperService.noop()
    RequestChainService.COUNTER += 1
  }

  call() {
    this.helperService.noop()
  }
}
