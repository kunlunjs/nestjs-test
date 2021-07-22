import { Injectable, StreamableFile } from '@nestjs/common'
import { createReadStream, readFileSync } from 'fs'
import { join } from 'path'
import type { Observable } from 'rxjs'
import { of } from 'rxjs'
import { NonFile } from './non-file'

@Injectable()
export class AppService {
  getReadStream(): StreamableFile {
    return new StreamableFile(
      createReadStream(join(process.cwd(), 'README.md'))
    )
  }

  getBuffer(): StreamableFile {
    return new StreamableFile(readFileSync(join(process.cwd(), 'README.md')))
  }

  getNonFile(): NonFile {
    return new NonFile('Hello world')
  }

  getRxJSFile(): Observable<StreamableFile> {
    return of(this.getReadStream())
  }
}
