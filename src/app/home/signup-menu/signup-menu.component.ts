import { Component, OnInit, Input } from '@angular/core';
import { InteractivityChecker } from '@angular/cdk/a11y';
import { UserAuthService } from '../userAuth.service';
import { LoginFormInfo } from '../loginFormInfo';

@Component({
  selector: 'app-signup-menu',
  templateUrl: './signup-menu.component.html',
  styleUrls: ['./signup-menu.component.css']
})
export class SignupMenuComponent implements OnInit {

    @Input() isSignUpShowing: boolean = false;
    public signUpInfo: SignUpFormInfo={
        email: '',
        password:  ''
    }
  constructor(private userAuthService: UserAuthService) {}

  ngOnInit() {
  }

  public onSubmit(): void {
    this.userAuthService.signUp(this.signUpInfo);
      console.log(this.signUpInfo);
  }

}

interface SignUpFormInfo {
    email: string;
    password: string;
}

