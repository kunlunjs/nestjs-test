# 注册 Mongoose 根模块的几种方法

### 注册业务模块

```ts
/**
 * src/mongoose/src/cats/cats.module.ts
 * 详见 src/mongoose
 * */
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'
import { CatSchema } from './schemas/cat.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
```

### 注册 mongoose 根模块

```ts
/**
 * src/mongoose/src/app.module.ts
 * */
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CatsModule } from './cats/cats.module'

// 对应 method 2 和 method 3
class ConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb://localhost:27017/test',
      useNewUrlParser: true
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
    /**
     * 以下 mthod 取其一
     * */
    // method 1
    MongooseModule.forRoot('mongodb://localhost:27017/test', {
      useNewUrlParser: true
    }),
    // method 2
    MongooseModule.forRootAsync({
      useClass: ConfigService
    }),
    // method 3
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService
    }),
    // method 4
    MongooseModule.forRootAsync({
      useFactory: () => ({
        useNewUrlParser: true,
        uri: 'mongodb://localhost:27017/test'
      })
    }),
    CatsModule
  ]
})
export class ApplicationModule {}
```
