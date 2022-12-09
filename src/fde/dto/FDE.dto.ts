import {IsNotEmpty, MinLength} from "class-validator";

export class CreateFDEwdto{

    first_date_of_execution: Date;
    repeat: number;
    task_id: string;

}