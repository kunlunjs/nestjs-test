import { Injectable, Scope } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { TransientService } from './transient.service'

@Injectable({ scope: Scope.TRANSIENT })
export class Transient3Service {
  constructor(public readonly svc: TransientService) {}
}
