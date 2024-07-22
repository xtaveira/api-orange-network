export class CreateServiceDto {
  readonly name: string;
  readonly contact: string;
  readonly description: string;
  readonly tags: string[];
  readonly image: string;
  readonly user: string;
}
