import type {
  BeforeApplicationShutdown,
  OnApplicationShutdown
} from '@nestjs/common'
import { Injectable, Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

const SIGNAL = process.argv[2]
const SIGNAL_TO_LISTEN = process.argv[3]

@Injectable()
class TestInjectable
  implements OnApplicationShutdown, BeforeApplicationShutdown {
  beforeApplicationShutdown(signal: string) {
    console.log(`beforeApplicationShutdown`)
  }

  onApplicationShutdown(signal: string) {
    console.log(`onApplicationShutdown`)
  }
}

@Module({
  providers: [TestInjectable]
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false
  })

  if (SIGNAL_TO_LISTEN && SIGNAL_TO_LISTEN !== 'NONE') {
    app.enableShutdownHooks([SIGNAL_TO_LISTEN])
  } else if (SIGNAL_TO_LISTEN !== 'NONE') {
    app.enableShutdownHooks()
  }

  await app.listen(1800)
  process.kill(process.pid, SIGNAL)
}
