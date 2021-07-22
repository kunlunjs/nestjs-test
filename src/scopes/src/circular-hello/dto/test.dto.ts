import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

/* prettier-ignore */
export class TestDto {
  @IsString()
  @IsNotEmpty()
  string: string;

  @IsNumber()
  number: number
}
