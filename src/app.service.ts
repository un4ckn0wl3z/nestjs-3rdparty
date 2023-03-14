import { Injectable } from '@nestjs/common';
import { GladiatorService } from '@unknownclub/gladiator';

@Injectable()
export class AppService {
  constructor(private readonly gladiatorService: GladiatorService) {}

  async getHello(): Promise<string> {
    return 'Is Anuwat using sword: ' + await this.gladiatorService.IsUsingSword();
  }
}
