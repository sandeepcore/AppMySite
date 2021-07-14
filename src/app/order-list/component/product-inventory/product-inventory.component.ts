import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatMenu } from '@angular/material';
import { AppModel } from 'src/app/dashboard/Model/AppModel';
import { AppService } from 'src/app/dashboard/service/app.service';
import { CategoryModel, ItemCategory, SubCategory } from '../../model/CategoryModel';
import { ProductModel } from '../../model/ProductModel';
import { CatService } from '../../service/cat.service';
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

  selectedApp:AppModel=new AppModel();

  catList: CategoryModel[] = [];
  selectedCategory: CategoryModel = new CategoryModel();

  subCatList: SubCategory[] = [];
  selectedSubCategory: SubCategory = new SubCategory();

  itemCatList: ItemCategory[] = [];
  selectedItemCategory: ItemCategory = new ItemCategory();
  isForm:boolean=false;

  constructor(private productService:ProductService,private categoryService:CatService,private appService:AppService) { 
    this.selectedApp=appService.selectedApp;
  }

  ngOnInit() {
    this.loadCategoryGrid();
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

  //   fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(json =>{
  //   console.log(json);
  //   this.currentList=json;
  // } )
  }

  loadCategoryGrid() {
    this.categoryService.allCategories(this.selectedApp._id).subscribe(v => {
      this.catList = v;
    })
  }

  openAddProduct(){
    this.isShowForm=true;
  }

  editProduct(product:ProductModel){
    this.selectedProduct=product;
    this.isShowForm=true;
  }

  setSelectedCat(cat: CategoryModel,isClicked:boolean) {
    this.selectedCategory = cat;
    this.subCatList = this.selectedCategory.subCat;
    if (this.subCatList && this.subCatList.length > 0) {
      this.setSelectedSubCat(this.subCatList[0],false);
    } else {
      this.subCatList = [];
      this.setSelectedSubCat(new SubCategory(),false);
      if(isClicked){
        this.getProductList(1);
      }
    }
  }

  setSelectedSubCat(cat: SubCategory,isClicked:boolean) {
    this.selectedSubCategory = cat;
    this.itemCatList = this.selectedSubCategory.Items;
    if (this.itemCatList && this.itemCatList.length > 0) {
      this.setSelectedItemCat(this.itemCatList[0],false);
    } else {
      this.itemCatList = [];
      this.setSelectedItemCat(new ItemCategory(),false);
      if(isClicked){
        this.getProductList(2);
      }
    }
  }
  setSelectedItemCat(cat: ItemCategory,isClicked:boolean) {
    this.selectedItemCategory = cat;
    if(isClicked){
      this.getProductList(3);
    }
  }

  getProductList(level:number){
    if(level==1){
      this.productService.getAppByParentCatIdAndOrgId(this.selectedCategory._id,this.selectedApp.orgId).subscribe(v=>{
        this.currentList=v;
       })
    }else if(level==2){
      this.productService.getAppBySubCatIdAndOrgId(this.selectedSubCategory.id,this.selectedApp.orgId).subscribe(v=>{
        this.currentList=v;
       })
    }else if(level==3){
      this.productService.getAppByChildCatIdAndOrgId(this.selectedItemCategory.id,this.selectedApp.orgId).subscribe(v=>{
        this.currentList=v;
       })
    }

  }

  getEmitSave(event:ProductModel){
    this.getClosePopup();
    this.currentList.push(event);
  }

  getClosePopup(){
    this.isShowForm=false;
  }
}
