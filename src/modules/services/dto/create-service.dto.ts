import { IsString, IsDefined, IsArray } from 'class-validator';

export class CreateServiceDto {
  @IsDefined({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  readonly name!: string;

  @IsDefined({ message: 'Contact is required' })
  @IsString({ message: 'Contact must be a string' })
  readonly contact!: string;

  @IsDefined({ message: 'Description is required' })
  @IsString({ message: 'Description must be a string' })
  readonly description!: string;

  @IsDefined({ message: 'Tags are required' })
  @IsArray({ message: 'Tags must be an array of strings' })
  @IsString({ each: true, message: 'Each tag must be a string' })
  readonly tags!: string[];

  @IsDefined({ message: 'Image URL is required' })
  @IsString({ message: 'Image URL must be a string' })
  readonly image!: string;

  @IsDefined({ message: 'User ID is required' })
  @IsString({ message: 'User ID must be a string' })
  readonly user!: string;
}
