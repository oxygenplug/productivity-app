import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-menu',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public isLoginShowing: boolean = false;
    public isSignUpShowing: boolean = false;
    
    public showLogIn(){
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
