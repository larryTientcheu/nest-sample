import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { FdeService } from './fde.service';
import { Request } from 'express';


@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  // constructor(private readonly fdeService: FdeService){};
  static globalVar: any;
  static globalVarDate: Date;
  static globalVarrepeat: any;
  // @Cron(new Date(Date.now() + 10 * 1000))
  @Cron(new Date(CronService.globalVarDate),
  {
    name: 'notifications',
    timeZone: 'Europe/Paris',
  })
  handleCron() {
    var x = 0;
    while(x < CronService.globalVarrepeat){
      console.log(CronService.globalVar);
      x++;
    }
    
  }
}