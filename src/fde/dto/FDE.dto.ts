import { Validate } from "joi-typescript-validator"
import Joi from 'joi';
export class CreateFDEwdto{
   
   
     first_date_of_execution: Date;
    
     public repeat: number;
     
     // @Matches(/^[0-9]|-/)
     task_id: string

}

const schema = Joi.object({
     first_date_of_execution: Joi.date(),
     repeat: Joi.number(),
     task_id: Joi.string().regex(/^[0-9]*_/),
 })

 schema.validate(CreateFDEwdto)