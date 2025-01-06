import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero, HeroDocument } from './entities/hero.entity';

@Injectable()
export class HeroesService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<HeroDocument>) {}

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    const createdHero = new this.heroModel({
      ...createHeroDto,
    });
    return createdHero.save();
  }

  async findAll(): Promise<Hero[]> {
    const heroes = await this.heroModel.find().exec();
    return heroes.map((hero) => ({
      ...hero.toObject(),
    }));
  }

  update(id: string, updateHeroDto: UpdateHeroDto) {
    return this.heroModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateHeroDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.heroModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
