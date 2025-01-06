import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { HeroesModule } from './heroes/heroes.module';

dotenv.config();
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), HeroesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
