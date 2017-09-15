import { validate } from "email-validator";

export class User{
  email:string;
  password:string;
  get isValidEmail(){
    return validate(this.email);
  }
}