import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title="Welcome to the home page"
  message="Hello"
  countries:string[]
  employees=[]
  constructor() {
    this.countries=["India","USA","Korea","Paris","London"]
    this.employees=[
      {'id':1,'name':'Raghav','age':23,'gender':1,'salary':14000},
      {'id':2,'name':'Ananya','age':25,'gender':0,'salary':18000},
      {'id':3,'name':'Abhimanyu','age':27,'gender':1,'salary':15000},
      {'id':4,'name':'Shreya','age':26,'gender':0,'salary':13000},
      {'id':5,'name':'Parth','age':22,'gender':1,'salary':19000},
      {'id':6,'name':'Bhumi','age':24,'gender':0,'salary':16000}
    ]
   }

  ngOnInit(): void {
  }

}
