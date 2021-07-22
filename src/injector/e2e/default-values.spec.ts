import { Test } from '@nestjs/testing'
import { expect } from 'chai'
import { DefaultsModules } from '../src/defaults/defaults.module'
import { DefaultsService } from '../src/defaults/defaults.service'
describe('Injector', () => {
  describe('when optional', () => {
    it(`should make use of default assignments`, async () => {
      const builder = Test.createTestingModule({
        imports: [DefaultsModules]
      })

      const app = await builder.compile()

      expect(app.get(DefaultsService).coreService.default).to.be.true
    })
  })
})
