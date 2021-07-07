import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductModel } from '../../model/ProductModel';

@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.scss']
})
export class ProductInventoryComponent implements OnInit {
  currentList = [];
  iCols: any;
  iCol = [];
  iCol1: any[];
  iColAll: any[];
  iCols1: any;
  iColsAll: any[];
  isShowForm:boolean=false;
  selectedProduct:ProductModel=new ProductModel();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  colorAttributes:string[]=[
    "black/233,333,333",
    "red/233,444,333",
    "brown/233,333,444"
];
sizeAttributes:string[]=[
    "XL",
    "S",
    "M",
    "XXL"
]
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

  openAddProduct(){
    this.isShowForm=true;
  }

  editProduct(product:ProductModel){
    this.selectedProduct=product;
    this.isShowForm=true;
  }
}
