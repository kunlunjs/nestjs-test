import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CatsModule } from './cats/cats.module'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: 'mongodb://localhost:27017/test',
          useNewUrlParser: true
        }
      }
    }),
    CatsModule
  ]
})
export class AsyncOptionsFactoryModule {}
