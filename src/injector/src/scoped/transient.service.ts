import { Injectable, Scope } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Transient2Service } from './transient2.service'

@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {
  constructor(public readonly svc: Transient2Service) {}
}
