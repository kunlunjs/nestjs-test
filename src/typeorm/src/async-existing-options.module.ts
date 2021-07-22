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
  providers: [ConfigService],
  exports: [ConfigService]
})
class ConfigModule {}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService
    }),
    PhotoModule
  ]
})
export class AsyncOptionsExistingModule {}
