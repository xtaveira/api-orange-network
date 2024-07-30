import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  orangeId: string = '';

  @IsString()
  password: string = '';
}
