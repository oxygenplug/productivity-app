import { Component, OnInit, Input } from '@angular/core';
import { InteractivityChecker } from '@angular/cdk/a11y';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
    @Input() isLoginShowing: boolean = false;
    public loginInfo: LoginFormInfo={
        username: '',
        password:  ''
    }
  constructor() {}

  ngOnInit() {
  }

  public onSubmit(): void {
      console.log(this.loginInfo);
  }

}

interface LoginFormInfo {
    username: string;
    password: string;
}