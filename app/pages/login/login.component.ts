import { Component ,OnInit} from "@angular/core";
import {Router} from '@angular/router'
import {User} from '../../shared/user/user'
import {UserService} from '../../shared/user/user.service'

@Component({
  selector: "login",
  templateUrl:'pages/login/login.html' ,
  styleUrls:["pages/login/login-common.css","pages/login/login.css"],
  providers:[UserService]
})
export class LoginComponent implements OnInit{
  user:User;
  isLoggingIn:boolean=true;
  constructor(private userService:UserService,private router:Router){
    this.user=new User();
  }
  ngOnInit(){
    this.user.email='parox2014@gmail.com';
    this.user.password='851128';
  }
  submit(){

    if(this.isLoggingIn){
      this.router.navigate(['/list']);
      //this.login();
    }else {
      this.signUp();
    }
  }
  login(){
 
    this.userService.login(this.user)
      .subscribe(
        ()=>{
          alert('login success');
  
          return this.router.navigate(['/list']);
        },
        (error)=>alert('We could not find your account.')
      );
  }
  signUp(){
    this.userService.register(this.user)
      .subscribe(()=>{
        alert('Your account was successfully created.');
        this.toggleDisplay();
      },()=>{
        alert('Unfortunately we were unable to create your account.')
      });
  }
  toggleDisplay(){
    this.isLoggingIn=!this.isLoggingIn;
  }
  get submitText(){
    return this.isLoggingIn?'Sign in':'Sign up';
  }
  
  get signUpText(){
    return this.isLoggingIn?'Sign Up for Groceries':'Back to login';
  }
}