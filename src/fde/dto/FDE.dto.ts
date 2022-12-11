import { Validate } from "joi-typescript-validator"
import Joi from 'joi';
export class CreateFDEwdto{
   
   
     first_date_of_execution: Date;
    
     public repeat: number;

     task_id: string

}

// Implemetation of JOI schema for input validation
const schema = Joi.object({
     first_date_of_execution: Joi.date(),
     repeat: Joi.number(),
     task_id: Joi.string().pattern(new RegExp('^[0-9]*_')),
     // Regex to get a string starting with a number and _
 })

 // Validating the schema
 schema.validate(CreateFDEwdto)