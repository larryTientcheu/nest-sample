import { Validate } from "joi-typescript-validator"
import Joi from 'joi';
export class CreateFDEwdto{
   
   
     first_date_of_execution: Date;
    
     public repeat: number;
     
     // @Matches(/^[0-9]|-/)
     task_id: string

}

// const schema = Joi.object().keys({
//      first_date_of_execution: Joi.date
// })

// // const result = Joi.validate(CreateFDEwdto,schema);

// schema.validate(CreateFDEwdto)