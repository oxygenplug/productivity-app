import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-menu',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeMenu implements OnInit {
    public isLoginShowing: boolean = false;
    public showLogIn(){
        console.log('here');
        this.isLoginShowing = true;
    }
  constructor() { }

  ngOnInit() {
  }

}
