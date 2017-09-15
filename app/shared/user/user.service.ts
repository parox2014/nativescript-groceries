import {Injectable} from '@angular/core'
import {Headers, Response,Http} from '@angular/http'
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import {User} from './user'
import {Config} from '../config'

@Injectable()
export class UserService {
  constructor(private http: Http) {
  
  }
  
  register(user: User): Observable<any> {
    let headers = new Headers();
    let url=Config.apiUrl + 'Users';
    let params={
      Username: user.email,
      Email: user.email,
      Password: user.password
    };

    headers.append('Content-Type', 'application/json');
    
    return this.http.post(url,params, {headers})
      .catch(this.handleErrors)
  }
  
  login(user: User): Observable<any> {
    let headers = new Headers();
    let params={
      username: user.email,
      password: user.password,
      grant_type: 'password'
    };

    headers.append('Content-type', 'application/json');
    
    return this.http.post(Config.apiUrl + 'oauth/token', params, {headers})
      .map((response: Response) => response.json())
      .do(data => Config.token = data.Result.access_token)
      .catch(this.handleErrors);
  }
  
  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}