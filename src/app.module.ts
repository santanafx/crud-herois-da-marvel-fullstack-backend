import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), HeroesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
