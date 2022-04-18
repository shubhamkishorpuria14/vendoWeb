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
	data:any = [];

	sendData(){
 		let url = 'http://18.117.241.236:4200/staticcontents/saveContent';
 		this.http.post(url, {
 	 	"howItWorks": this.howitworks,
		"contact": this.contact,
		"termAndConditions": this.termAndCondition,
		"imprint": this.imprint,
		"explanation": this.explanation
 		}).toPromise().then((data: any) =>{
 	 	window.alert('Successfully changed');
 	})
	 }

	 getData(){
	 	let url = 'http://18.117.241.236:4200/staticcontents/getContents';
   		this.http.get(url).subscribe((data)=>{
    		console.warn('get api data',data);
    		this.data = data;
    		this.contact = this.data.contact;
    		this.howitworks = this.data.howItWorks;
    		this.termAndCondition = this.data.termAndConditions;
    		this.imprint = this.data.imprint;
    		this.explanation = this.data.explanation;
    	});
	 }

  	constructor(private http: HttpClient){ }
   	ngOnInit() {
   		this.getData();
	}
}
