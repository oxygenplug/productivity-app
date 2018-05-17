import { Component, OnInit, Input } from '@angular/core';
import { InteractivityChecker } from '@angular/cdk/a11y';
import { LoginFormInfo } from '../loginFormInfo';
import { UserAuthService } from '../userAuth.service';

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
  constructor(private userAuthService: UserAuthService) {
  }

  ngOnInit() {
  }

  public onSubmit(): void {
      this.userAuthService.logIn(this.loginInfo);
      console.log(this.loginInfo);
  }

}