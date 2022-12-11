import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FDE } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateFDEwdto } from './dto/FDE.dto';
import { v4 as uuidv4 } from 'uuid';
import { CronService } from './fde.cron.service';
import { LoggingInterceptor } from './dto/log.interceptor';
import Joi from 'joi';




@Injectable()
export class FdeService {

  constructor(
    @InjectRepository(FDE)
    private readonly fdeRepository: Repository<FDE>
  ) { }
  private readonly cronService: CronService

  getAllFde() {
    return this.fdeRepository.find()
  }

  getTask(id: number) {
    return this.fdeRepository.findOne({
      select: [],
      where: {
        id,
      },
    });

  }

  createFde(createFdeDto: CreateFDEwdto) {
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
    CronService.globalVar = newFde
    CronService.globalVarDate = newFde.first_date_of_execution;
    console.log(new Date(CronService.globalVarDate))
    CronService.globalVarrepeat = newFde.repeat;
    return this.fdeRepository.save(newFde)
  }

}