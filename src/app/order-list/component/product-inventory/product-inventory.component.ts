import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductModel } from '../../model/ProductModel';
import { ProductService } from '../../service/product.service';

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

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.iCols = [
      { field: "name", header: "Name", show: true, type: "String" },
      { field: "description", header: "Description", show: true, type: "String" },
      { field: "price", header: "Price", show: true, type: "String" },
      { field: "tax", header: "Tax", show: true, type: "String" },
      { field: "StockQty", header: "Stock Quantity", show: true, type: "String" },      
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
