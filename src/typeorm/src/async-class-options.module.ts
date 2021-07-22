import { Module } from '@nestjs/common'
import type {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory
} from '@nestjs/typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PhotoEntity } from './photo/photo.entity'
import { PhotoModule } from './photo/photo.module'

class ConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [PhotoEntity],
      synchronize: true,
      keepConnectionAlive: true,
      retryAttempts: 2,
      retryDelay: 1000
    }
  }
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: ConfigService
    }),
    PhotoModule
  ]
})
export class AsyncOptionsClassModule {}
