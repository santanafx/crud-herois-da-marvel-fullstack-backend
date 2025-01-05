import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename: string = file.originalname;
          cb(null, filename);
        },
      }),
    }),
  )
  create(
    @Body() createHeroDto: CreateHeroDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.heroesService.create(createHeroDto, file);
  }

  @Get()
  findAll() {
    return this.heroesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.heroesService.update(id, updateHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroesService.remove(id);
  }
}
