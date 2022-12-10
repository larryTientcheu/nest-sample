import { Module } from '@nestjs/common';
import { FdeController } from './fde.controller';
import { FdeService } from './fde.service';
import { FDE } from 'src/typeorm';

import {TypeOrmModule} from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './fde.cron.service';



@Module({
    imports: [TypeOrmModule.forFeature([FDE]), ScheduleModule.forRoot()],
    controllers: [FdeController],
    providers:[FdeService,CronService],
})
export class FdeModule{}