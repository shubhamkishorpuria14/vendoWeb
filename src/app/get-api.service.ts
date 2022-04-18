import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  getApi(){
  	return this.http.get('http://18.117.241.236:4200/users/getAllUsers');
  }

  userAuthentication(username: string,password: any){
  	var data = {};
  	data = {
  		"email": username,
  		"password": password
  	}
  	return this.http.post('http://18.117.241.236:4200/admin/login',data);
  }

  signupAuthentication(name: string,password: any, email: any){
  	var data = {};
  	data = {
  		"name": name,
  		"password": password,
  		"email": email,
  		"isAdmin": false
  	}
  	return this.http.post('http://18.117.241.236:4200/admin/add_user',data);
  }

}
