import { Component, OnInit } from '@angular/core';


import { NgModule } from '@angular/core';


import {HttpClient} from '@angular/common/http'; 
@Component({
  selector: 'app-static-component',
  templateUrl: './static-component.component.html',
  styleUrls: ['./static-component.component.css']
})
export class StaticComponentComponent implements OnInit {
 
howitworks: string;
	contact: string;
	termAndCondition: string;
	imprint: string;
	explanation: string;
	data: {};

	sendData(){
 		console.log(this.explanation);
 		let url = 'http://18.191.82.135:3001/staticcontents/saveContent';
 		this.http.post(url, {
 	 	"howItWorks": this.howitworks,
		"contact": this.contact,
		"termAndConditions": this.termAndCondition,
		"imprint": this.imprint,
		"explanation": this.explanation
 		}).toPromise().then((data: any) =>{
 	 	console.log(data);
 	})
	 }

	 getData(){
	 	let url = 'http://18.191.82.135:3001/staticcontents/getContents';
   		this.http.get(url).subscribe((data)=>{
    		console.warn('get api data',data);
    		this.data = data;
    		console.log(this.data);
    	});
	 }

  	constructor(private http: HttpClient){ }
   	ngOnInit() {
   		this.getData();
	}
}
