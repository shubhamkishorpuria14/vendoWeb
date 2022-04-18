import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import { GetApiService } from '../get-api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	signin(email: string,password: any){
		this.getApi.userAuthentication(email,password).subscribe((data: any)=>{
			if(data){

				this.route.navigate(['/staticData']);
			}else{
				window.alert('Your product has been added to the cart!')
			}
			console.log(data);
		});
		
	}
	signUp(username: string,password: any, email: any){
		this.getApi.signupAuthentication(username,password,email).subscribe((data: any)=>{
			if(data){
				this.route.navigate(['/staticData']);
			}else{
				alert('Something is wrong');
				window.alert('Your product has been added to the cart!')
			}
			console.log(data);
		});
		
	}

  constructor(public route: Router, private getApi: GetApiService) { }

  ngOnInit(): void {
  }

}
