import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-inventory',
  templateUrl: './order-inventory.component.html',
  styleUrls: ['./order-inventory.component.scss']
})
export class OrderInventoryComponent implements OnInit {
  currentList = [];
  iCols: any;
  iCol = [];
  iCol1: any[];
    iColAll: any[];
    iCols1: any;
    iColsAll: any[]; 
 
  constructor() { }

  ngOnInit() {
    this.iCols = [
      { field: "name", header: "Name", show: true, type: "String" },
      { field: "username", header: "User Name", show: true, type: "String" },
      { field: "website", header: "Website", show: true, type: "String" },
      { field: "phone", header: "Phone", show: true, type: "String" },
      { field: "email", header: "Email", show: true, type: "String" },      
      { field: "Action", header: "", show: true, type: "String" },
  ];

  this.iCols1 = [
      { field: "Name", header: "Name", show: true, type: "String" },
  ];
  this.iCol1 = ["Name"];
  this.iColsAll = this.iCols;

  this.iCols.forEach((ele) => {
      this.iCol.push(ele.field);
  });
  this.iColAll = this.iCol;

    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{
    console.log(json);
    this.currentList=json;
  } )
  }

}
