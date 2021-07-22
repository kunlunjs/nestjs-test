import type { DynamicModule } from '@nestjs/common'
import { InputService } from './input.service'

/**
 * 需要加强理解
 */
export class CircularModule {
  static forRoot(): DynamicModule {
    const a = {
      module: CircularModule,
      providers: [InputService],
      b: null
    }
    a.b = a
    return a
  }
}
