import { Module } from '@nestjs/common';
import { FdeController } from './fde.controller';
import { FdeService } from './fde.service';
import { FDE } from 'src/typeorm';

import {TypeOrmModule} from '@nestjs/typeorm';



@Module({
    imports: [TypeOrmModule.forFeature([FDE])],
    controllers: [FdeController],
    providers:[FdeService],
})
export class FdeModule{}