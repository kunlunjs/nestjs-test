import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from 'src/injector/src/app.module'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule)
  await app.listen(3000)
}

bootstrap()
