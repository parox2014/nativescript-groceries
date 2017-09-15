import {Component, OnInit,ElementRef,ViewChild} from "@angular/core";
import {Router} from '@angular/router'
import {User} from '../../shared/user/user'
import {UserService} from '../../shared/user/user.service'
import {Color} from 'color'
import {View} from 'ui/core/view'
import {Page} from 'ui/page'

@Component({
  selector: "login",
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn: boolean = true;
  @ViewChild('container') container:ElementRef;
  constructor(private userService: UserService, private router: Router,private page:Page) {
    this.user = new User();
  }
  
  ngOnInit() {
    this.user.email = 'parox2014@gmail.com';
    this.user.password = '851128';
    this.page.actionBarHidden=true;
    this.page.backgroundImage='res://bg_login';
  }
  
  submit() {
    if(!this.user.isValidEmail){
      return alert('Please enter a valid email address');
    }

    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  
  login() {
    
    this.userService.login(this.user)
      .subscribe(
        () => {
          return this.router.navigate(['/list']);
        },
        (error) => alert('We could not find your account.')
      );
  }
  
  signUp() {
    this.userService.register(this.user)
      .subscribe(() => {
        alert('Your account was successfully created.');
        this.toggleDisplay();
      }, () => {
        alert('Unfortunately we were unable to create your account.')
      });
  }
  
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    let container=<View>this.container.nativeElement;
    container.animate({
      backgroundColor:this.isLoggingIn?new Color('white'):new Color('#301217'),
      duration:300
    });
  }
  
  get submitText() {
    return this.isLoggingIn ? 'Sign in' : 'Sign up';
  }
  
  get signUpText() {
    return this.isLoggingIn ? 'Sign Up for Groceries' : 'Back to login';
  }
}