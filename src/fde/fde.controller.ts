import {Controller, Get, Post, Body} from '@nestjs/common';
import { CreateFDEwdto } from './dto/FDE.dto';
import { FdeService } from './fde.service';

@Controller()
export class FdeController {
    constructor(private readonly fdeService: FdeService) {}
  
    @Get()
    async findAll(){
      return this.fdeService.getAllFde()
    }

    @Post('create')
    createFdes(@Body() createFdeDto: CreateFDEwdto){
      return this.fdeService.createFde(createFdeDto);
    }


  }