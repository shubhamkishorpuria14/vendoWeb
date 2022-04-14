import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

	title = 'vendoLatest';
	 sendData(){
	 	console.log(1);
	 }

	dataa = [
	    {name: 'Ajay', email: 'therichpost@gmail.com', website:'therichpost.com'},
	    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
	    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
	    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
	  	{name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
	    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
	    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
	  	{name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
	    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
	    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
	 ];
	 
    dtOptions: DataTables.Settings = {};
  	constructor(private http: HttpClient){ }
   	ngOnInit() {
  		this.dtOptions = {
      		pagingType: 'full_numbers',
      		pageLength: 20,
    		lengthMenu : [5, 10, 25],
      		processing: true,
      		lengthChange: false
    	};
    	console.log(1);

	}

}
