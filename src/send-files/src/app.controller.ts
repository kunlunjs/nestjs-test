import type { StreamableFile } from '@nestjs/common'
import { Controller, Get } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AppService } from './app.service'
import type { Observable } from 'rxjs'
import type { NonFile } from './non-file'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('file/stream')
  getFile(): StreamableFile {
    return this.appService.getReadStream()
  }

  @Get('file/buffer')
  getBuffer(): StreamableFile {
    return this.appService.getBuffer()
  }

  @Get('non-file/pipe-method')
  getNonFile(): NonFile {
    return this.appService.getNonFile()
  }

  @Get('file/rxjs/stream')
  getRxJSFile(): Observable<StreamableFile> {
    return this.appService.getRxJSFile()
  }
}
