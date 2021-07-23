import { Module } from '@nestjs/common'
import type {
  MongooseModuleOptions,
  MongooseOptionsFactory
} from '@nestjs/mongoose'
import { MongooseModule } from '@nestjs/mongoose'

class ConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb://localhost:27017/test',
      useNewUrlParser: true
    }
  }
}

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: ConfigService
    })
  ]
})
export class AsyncOptionsClassModule {}
