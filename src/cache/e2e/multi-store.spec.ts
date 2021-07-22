import type { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'
import { MultiStoreModule } from '../src/multi-store/multi-store.module'

describe('Caching Multi Store', () => {
  let server
  let app: INestApplication

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [MultiStoreModule]
    }).compile()

    app = moduleRef.createNestApplication()
    server = app.getHttpServer()
    await app.init()
  })

  it(`should return empty`, async () => {
    return request(server).get('/').expect(200, '')
  })

  it(`should return data`, async () => {
    return request(server).get('/').expect(200, 'multi-store-value')
  })

  afterEach(async () => {
    await app.close()
  })
})
