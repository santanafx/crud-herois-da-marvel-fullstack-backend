import { ApiProperty } from '@nestjs/swagger';

export class CreateHeroDto {
  @ApiProperty({
    description: 'The name of the hero',
    example: 'Sipderman',
  })
  name: string;

  @ApiProperty({
    description: 'The abilities of the hero',
    example: 'Sipder web',
  })
  abilities: string;

  @ApiProperty({
    description: 'The origin of the hero',
    example: 'New York',
  })
  origin: string;

  @ApiProperty({
    description: 'The image of the hero',
    example: 'Image path',
  })
  image: string;
}
