import type { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { expect } from 'chai'
import * as request from 'supertest'
import { RequestScopeGuard } from '../src/hello/guards/request-scoped.guard'
import { HelloController } from '../src/hello/hello.controller'
import { HelloModule } from '../src/hello/hello.module'
import { LoggingInterceptor } from '../src/hello/interceptors/logging.interceptor'
import { UserByIdPipe } from '../src/hello/users/user-by-id.pipe'
import { UsersService } from '../src/hello/users/users.service'

class Meta {
  static COUNTER = 0
  constructor() {
    Meta.COUNTER++
  }
}

describe('Request scope', () => {
  let server
  let app: INestApplication

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        HelloModule.forRoot({
          provide: 'META',
          useClass: Meta
        })
      ]
    }).compile()

    app = module.createNestApplication()
    server = app.getHttpServer()
    await app.init()
  })

  describe('when one service is request scoped', () => {
    beforeEach(async () => {
      const performHttpCall = end =>
        request(server)
          .get('/hello')
          .end((err, res) => {
            if (err) return end(err)
            end()
          })
      await new Promise(resolve => performHttpCall(resolve))
      await new Promise(resolve => performHttpCall(resolve))
      await new Promise(resolve => performHttpCall(resolve))
    })

    it(`should create controller for each request`, async () => {
      expect(HelloController.COUNTER).to.be.eql(3)
    })

    it(`should create service for each request`, async () => {
      expect(UsersService.COUNTER).to.be.eql(3)
    })

    it(`should share static provider across requests`, async () => {
      expect(Meta.COUNTER).to.be.eql(1)
    })

    it(`should create request scoped pipe for each request`, async () => {
      expect(UserByIdPipe.COUNTER).to.be.eql(3)
      expect(UserByIdPipe.REQUEST_SCOPED_DATA).to.deep.equal([1, 1, 1])
    })

    it(`should create request scoped interceptor for each request`, async () => {
      expect(LoggingInterceptor.COUNTER).to.be.eql(3)
      expect(LoggingInterceptor.REQUEST_SCOPED_DATA).to.deep.equal([1, 1, 1])
    })

    it(`should create request scoped guard for each request`, async () => {
      expect(RequestScopeGuard.COUNTER).to.be.eql(3)
      expect(RequestScopeGuard.REQUEST_SCOPED_DATA).to.deep.equal([1, 1, 1])
    })
  })

  afterEach(async () => {
    await app.close()
  })
})
