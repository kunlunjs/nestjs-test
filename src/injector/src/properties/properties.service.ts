import { Inject, Injectable } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { DependencyService } from './dependency.service'

export const SYMBOL_TOKEN = Symbol('token')

@Injectable()
export class PropertiesService {
  /* prettier-ignore */
  @Inject() service: DependencyService;
  /* prettier-ignore */
  @Inject('token') token: boolean;
  @Inject(SYMBOL_TOKEN) symbolToken: boolean
}
