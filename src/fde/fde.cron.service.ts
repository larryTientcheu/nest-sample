import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { FdeService } from './fde.service';
import { Request } from 'express';


@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  // constructor(private readonly fdeService: FdeService){};
  static globalVar: any;
  static globalVarDate: any;
  static globalVarrepeat: any;
  // static globalVarTask_id: any;

  @Cron(new Date(CronService.globalVarDate))
  handleCron() {
    var x = 0;
    while(x < CronService.globalVarrepeat){
      console.log(new Date(CronService.globalVar));
      x++;
    }
    
  }
}