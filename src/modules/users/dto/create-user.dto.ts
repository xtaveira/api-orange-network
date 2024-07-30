import { IsString, IsDefined, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsDefined({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  readonly name!: string;

  @IsDefined({ message: 'Orange ID is required' })
  @IsString({ message: 'Orange ID must be a string' })
  readonly orangeId!: string;

  @IsDefined({ message: 'Contact is required' })
  @IsString({ message: 'Contact must be a string' })
  readonly contact!: string;

  @IsDefined({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  readonly password!: string;

  @IsDefined({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  readonly email!: string;

  @IsDefined({ message: 'City is required' })
  @IsString({ message: 'City must be a string' })
  readonly city!: string;

  @IsDefined({ message: 'State is required' })
  @IsString({ message: 'State must be a string' })
  readonly state!: string;
}
