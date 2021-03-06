import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  getApi(){
  	return this.http.get('http://api.vendev.xyz/users/getAllUsers');
  }

  userAuthentication(username: string,password: any){
  	var data = {};
  	data = {
  		"email": username,
  		"password": password
  	}
  	return this.http.post('http://api.vendev.xyz/admin/login',data);
  }

  signupAuthentication(name: string,password: any, email: any){
  	var data = {};
  	data = {
  		"name": name,
  		"password": password,
  		"email": email,
  		"isAdmin": false
  	}
  	return this.http.post('http://api.vendev.xyz/admin/add_user',data);
  }

}
