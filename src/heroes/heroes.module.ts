import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Hero, HeroSchema } from './entities/hero.entity';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
  ],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
