// import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
// import { Cron, SchedulerRegistry, Timeout } from '@nestjs/schedule';
// import { CronJob } from 'cron';
// import { FdeService } from './fde.service';

// @Injectable()
// export class CronService {
//   private readonly logger = new Logger(CronService.name);
//   constructor(private schedulerRegistry: SchedulerRegistry, private readonly fdeService: FdeService){}


//   addCronJob(name: string, seconds: string) {
//     const job = new CronJob(new Date(seconds), () => {
//       this.logger.warn(`time (${seconds}) for job ${name} to run!`);
//     });
  
//     this.schedulerRegistry.addCronJob(name, job);
//     job.start();
  
//     this.logger.warn(
//       `job ${name} added for each minute at ${seconds} seconds!`,
//     );
//   }
  
//   // public async getNextTasks(){
//   //   let task  = await this.fdeService.getAllFdeAfterToday();  

//   //   for (var i of task){
//   //     this.addCronJob(''+i.task_id,''+i.first_date_of_execution)
//   //     console.log(''+i.task_id,''+i.first_date_of_execution)
//   //   }
//   // }

//   // future_tasks =  this.getNextTasks()


// }