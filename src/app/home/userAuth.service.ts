import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { userInfo } from "os";

@Injectable()
export class UserAuthService {
    private basePath: 'https://agile-taiga-82794.herokuapp.com';

    constructor(private httpClient: HttpClient, private userAuth: UserAuthService){}

    public logIn() {
        // /users/login
        // this.httpClient.get(`${this.basePath}/users/login`, {loginInfo.username, loginInfo.password})

        // make a get request to the server with the username and password from the loginInfo. server returns the token in the body, save the token in localstorage, and redirect to the dashboard
    }

    public logOut(){
        // make a delete request to the server, remove token and all cache from local storage
    }

    public signUp(){
        // /users/

        // make a post request to the server with the username and password, server returns the token in the body, save the token in localStorage, and redirect to the dashboard
    }
}