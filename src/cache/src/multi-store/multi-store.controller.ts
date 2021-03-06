import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Cache } from 'cache-manager'

@Controller()
export class MultiStoreController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get()
  async getFromMultiStore(): Promise<unknown> {
    const value = await this.cacheManager.get('multi-store-key')
    if (!value) {
      await this.cacheManager.set('multi-store-key', 'multi-store-value')
    }
    return value
  }
}
