import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
title = 'app works!';
  private apiUrl='http://localhost:1337/categories'
  data: any={};

  constructor(private http: Http) {
    this.getContacts();
    this.getData();
  }

  getData(){
     return this.http.get(this.apiUrl).map((res: Response) => res.json())
        console.log("data access");

  }

  getContacts() {
    this.getData().subscribe(data=> {
    console.log(data);
    this.data = data
    })
  }
}

