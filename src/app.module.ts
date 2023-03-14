import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GladiatorModule  } from '@unknownclub/gladiator';


@Module({
  imports: [GladiatorModule.register({
    weapon: "Sword",
    name: "Anuwat",
    level : 19
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
