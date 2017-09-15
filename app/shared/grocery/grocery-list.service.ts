import {Injectable} from '@angular/core'
import {Http, Headers, Response} from '@angular/http'
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import {Config} from '../config'
import {Grocery} from './grocery'

@Injectable()
export class GroceryListService {
  constructor(private http: Http) {
  }
  
  load() {
    let headers = new Headers();
    let url=Config.apiUrl+'Groceries';

    headers.append('Authorization', 'Bearer ' + Config.token);
    headers.append('Content-Type', 'application/json');    
    
    return this.http.get(url, {headers})
      .map((resp: Response) => resp.json())
      .map(data => {
        return data.Result.map(grocery => new Grocery(grocery.Id, grocery.Name))
      })
      .catch(this.handleError);
  }

  add(name: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);
    headers.append("Content-Type", "application/json");
  
    return this.http.post(
      Config.apiUrl + "Groceries",{ Name: name },
   
      { headers }
    )
    .map(res => res.json())
    .map(data => {
      return new Grocery(data.Result.Id, name);
    })
    .catch(this.handleError);
  }

  handleError(error:Response){
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
