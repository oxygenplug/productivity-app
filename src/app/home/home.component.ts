import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-menu',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeMenu implements OnInit {
    public isLoginShowing: boolean = false;
    public isSignUpShowing: boolean = false;
    
    public showLogIn(){
        console.log('here');
        this.isLoginShowing = true;
    }

    public showSignUp(){
        console.log('here');
        this.isSignUpShowing = true;
    }
  constructor() { }

  ngOnInit() {
  }

}