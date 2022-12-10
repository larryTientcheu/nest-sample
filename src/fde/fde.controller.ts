import {Controller, Get, Post, Body, UseInterceptors, Param} from '@nestjs/common';
import { CreateFDEwdto } from './dto/FDE.dto';
import { LoggingInterceptor } from './dto/log.interceptor';
import { FdeService } from './fde.service';

@UseInterceptors(LoggingInterceptor)
@Controller()
export class FdeController {
    constructor(private readonly fdeService: FdeService) {}
  
    @Get()
    async findAll(){
      return this.fdeService.getAllFde()
    }

    @Get(':id')
    async findOne(@Param('id') id){
      return this.fdeService.getTask(id)
    }

    @Post('create')
    async createFdes(@Body() createFdeDto: CreateFDEwdto){
      return this.fdeService.createFde(createFdeDto);
    }


  }