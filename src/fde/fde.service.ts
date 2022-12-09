import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FDE } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateFDEwdto } from './dto/FDE.dto';


@Injectable()
export class FdeService {
   
  constructor(
    @InjectRepository(FDE)
    private readonly fdeRepository: Repository<FDE>
  ){}

  getAllFde(){
    return this.fdeRepository.find()
  }

  createFde(createFdeDto: CreateFDEwdto){
    const newFde = this.fdeRepository.create(createFdeDto);
    return this.fdeRepository.save(newFde)
  }

}