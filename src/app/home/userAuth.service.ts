import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { LoginMenuComponent } from "./login-menu/login-menu.component";
import { User } from "./user";
import { LoginFormInfo } from "../home/loginFormInfo";
import { Router } from "@angular/router";

@Injectable()
export class UserAuthService {
  private basePath = "https://agile-taiga-82794.herokuapp.com";

  private _token: string;
  public get token(): string {
    return this._token;
  }
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  public logIn(loginInfo: LoginFormInfo) {
    // /users/login
    this.httpClient
      .post<User>(`${this.basePath}/users/login`, loginInfo)
      .subscribe(res => {
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl("/dashboard");
      });
    // make a post request to the server with the username and password from the loginInfo. server returns the token in the body, save the token in localstorage, and redirect to the dashboard
  }

  public logOut(loginInfo: LoginFormInfo) {
    this.httpClient
      .delete<User>(`${this.basePath}/users/me/token`)
      .subscribe(res => {
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl("/dashboard");
      });
    // make a delete request to the server, remove token and all cache from local storage
  }

  public signUp(loginInfo: LoginFormInfo) {
    // /users/
    // make a post request to the server with the username and password, server returns the token in the body, save the token in localStorage, and redirect to the dashboard
    this.httpClient
      .post<User>(`${this.basePath}/users/`, loginInfo)
      .subscribe(res => {
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl("/dashboard");
      });
  }
}
