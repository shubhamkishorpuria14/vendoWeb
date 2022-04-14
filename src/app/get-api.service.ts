import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  getApi(){
  	return this.http.get('http://18.191.82.135:3001/users/getAllUsers');
  }

}
