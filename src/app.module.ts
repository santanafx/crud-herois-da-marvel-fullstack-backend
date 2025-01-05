import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://santanafx:!Lucas421@cluster0.epg7w.mongodb.net/',
    ),
    HeroesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
