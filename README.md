# NestJS 测试案例

### start

- `docker-compose up -d` 安装启动数据库等容器
- `docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Names}}\t{{.Status}}"` 查看启动的容器情况
- `docker-compose down` 关闭所有容器
- `docker ps -a` 查看所有容器（包含已停止）
- `docker rm {containerId}` 删除容器 ID 为 containerId 的容器

### 测试用例基本结构

```ts
import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'

describe 描述一般写文件、条件

// 典型结构 1
describe('....', () => {
  let testingModule: TestingModule
  beforeEach(async () => {
    // 执行顺序：
    // 可以在 it 中或 hooks(beforeEach/beforeAll) 中
    testingModule = await Test.createTestingModule({
      imports: [
        /*...*/
      ]
    }).combile()
  })
  afterEach(async () => {
    // 执行顺序：
    await app.close()
  })
  it('...', async () => {
    console.log('it-1')
  })
  it('...', async () => {
    console.log('it-2')
  })
})

// 典型结构 2
describe('...', () => {
  describe('...', () => {
    it('...',. () => {
      // TODO
    })
  })
})
```

### 描述语句基本范式

1. 应该是什么？（对等）

- ``

2. 应该有什么？（包含）

   - should fail with "UnknownExportException"
   - should fail with "RuntimeException"

3. 应该做什么？（动作）
   - should resolve circular structure with dynamic modules

### 常用断言集锦

```ts
import { expect } from 'chai'

const inputService = testingModule.get<InputService>(InputService)
// 应该是 XX 实例
expect(inputService).to.be.instanceOf(InputService)

const module = testingModule.get<CoreInjectablesModule>(CoreInjectablesModule)
// 不应该未定义
expect(module).to.not.be.undefined
// 构造函数名应该等于 XX
expect(module.constructor.name).to.be.eq('CoreInjectablesModule')

/**
 * 是某个异常的实例
 * */
import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception'

try {
  const buider = Test.createTestingModule({
    imports: [InjectModule]
  })
  await builder.compile()
} catch (err) {
  expect(err).to.be.instanceof(RuntimeException)
}
// 获取全局应用配置
```

### // TODO

- microservices
- mongoose
- websockets

### 相关资源

- [jest](https://jestjs.io/zh-Hans/docs/getting-started)
- [chai](https://www.chaijs.com/guide/styles/#expect)
- [majestic](https://github.com/Raathigesh/majestic)
