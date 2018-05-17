import { Component, OnInit, Input } from '@angular/core';
import { InteractivityChecker } from '@angular/cdk/a11y';

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
  constructor() {}

  ngOnInit() {
  }

  public onSubmit(): void {
      console.log(this.signUpInfo);
  }

}

interface SignUpFormInfo {
    email: string;
    password: string;
}

