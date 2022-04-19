import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


import { DataTablesModule } from "angular-datatables";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
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
	// deleterow(name){
	//     console.log(name);
	//     //here do delete event
	//     const that = this;
	//  }
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
