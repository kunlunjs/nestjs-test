import { Module } from '@nestjs/common'
import { CircularService } from './circular.service'
import { InputService } from './input.service'

/**
 * 同一个模块内部 service 相互引用，但是一个 module 对外
 */
@Module({
  providers: [CircularService, InputService]
})
export class CircularModule {}
