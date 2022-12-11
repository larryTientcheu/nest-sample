import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FDE } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateFDEwdto } from './dto/FDE.dto';
import { v4 as uuidv4 } from 'uuid';

import { LoggingInterceptor } from './dto/log.interceptor';
import Joi from 'joi';
import { MoreThanOrEqual } from "typeorm"
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';




@Injectable()
export class FdeService {

  constructor(
    @InjectRepository(FDE)
    private readonly fdeRepository: Repository<FDE>,private schedulerRegistry: SchedulerRegistry
  ) { }
  private readonly logger = new Logger(FdeService.name);

  getAllFde() {
    return this.fdeRepository.find()
  }

  // getTask(id: number) {
  //   return this.fdeRepository.findOne({
  //     select: [],
  //     where: {
  //       id,
  //     },
  //   });
  // }

  async getAllFdeAfterToday() {
    return this.fdeRepository.find({
      where: {
        first_date_of_execution: MoreThanOrEqual(new Date(Date.now()))
      },
    });
  }

  addCronJob(name: string, seconds: string, repeat:number) {
    const job = new CronJob(new Date(seconds), () => {
      var x = 0;
      while ( x < repeat){
      this.logger.warn(`time (${seconds}) for job ${name} to run!`);
    x++}
    });
  
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
  
    this.logger.warn(
      `job ${name} added for each minute at ${seconds} seconds!`,
    );
  }

  async createFde(createFdeDto: CreateFDEwdto) {
    const newFde = this.fdeRepository.create(createFdeDto);
    newFde.task_id = uuidv4();

    // Implemetation of JOI schema for input validation
    const schema = Joi.object({
      first_date_of_execution: Joi.date(),
      repeat: Joi.number(),
      task_id: Joi.string().pattern(new RegExp('^[0-9]') && new RegExp('_')),
    })
    // Validating the schema
    schema.validate(newFde)

    LoggingInterceptor.globalVarTask_id = newFde.task_id;
    const fde = this.fdeRepository.save(newFde)
    this.addCronJob('' + newFde.task_id, '' + newFde.first_date_of_execution, newFde.repeat)

    return fde

  }
}