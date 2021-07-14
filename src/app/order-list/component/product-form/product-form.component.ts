import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppModel } from 'src/app/dashboard/Model/AppModel';
import { AppService } from 'src/app/dashboard/service/app.service';
import { CategoryModel, ItemCategory, SubCategory } from '../../model/CategoryModel';
import { ProductModel } from '../../model/ProductModel';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  removable:boolean=true;
  @Input() isShow: boolean = false;
  @Input() product: ProductModel = new ProductModel();
  @Input() catList: CategoryModel[] = [];
  selectedCategory: CategoryModel = new CategoryModel();

  subCatList: SubCategory[] = [];
  selectedSubCategory: SubCategory = new SubCategory();

  itemCatList: ItemCategory[] = [];
  selectedItemCategory: ItemCategory = new ItemCategory();

  text: string = 'Create';
  id: string = "";
  colorAttributes: string[] = [
    "black/233,333,333",
    "red/233,444,333",
    "brown/233,333,444"
  ];
  sizeAttributes: string[] = [
    "XL",
    "S",
    "M",
    "XXL"
  ]
   colorText:string="";
  emitSave: EventEmitter<ProductModel> = new EventEmitter();
  emitClose: EventEmitter<ProductModel> = new EventEmitter();
  selectedApp: AppModel = new AppModel();
  constructor(private productService: ProductService, private appService: AppService) {
    this.selectedApp=appService.selectedApp;
  }

  ngOnInit() {
    if (this.product != null && this.product._id) {
      this.text = 'Edit';
    }
  }

  setSelectedCat(cat: CategoryModel, isClicked: boolean) {
    this.selectedCategory = cat;
    this.subCatList = this.selectedCategory.subCat;
    if (this.subCatList && this.subCatList.length > 0) {
      this.setSelectedSubCat(this.subCatList[0], false);
    } else {
      this.subCatList = [];
      this.setSelectedSubCat(new SubCategory(), false);
    }
  }

  setSelectedSubCat(cat: SubCategory, isClicked: boolean) {
    this.selectedSubCategory = cat;
    this.itemCatList = this.selectedSubCategory.Items;
  }

  addColor(event){
    if(this.product.colorAttributes && this.product.colorAttributes.length>0){
      this.product.colorAttributes.push(this.colorText);
    }else{
      this.product.colorAttributes=[this.colorText];
    }
    this.colorText="";
  }

  removeColor(color:string){
     let index=this.product.colorAttributes.findIndex(v=>v==color);
     if(index>-1) this.product.colorAttributes.splice(index,1);
  }
  sizeText:string="";
  addSize(event){
    if(this.product.sizeAttributes && this.product.sizeAttributes.length>0){
      this.product.sizeAttributes.push(this.sizeText);
    }else{
      this.product.sizeAttributes=[this.sizeText];
    }
    this.sizeText="";
  }

  removeSize(size:string){
     let index=this.product.sizeAttributes.findIndex(v=>v==size);
     if(index>-1) this.product.sizeAttributes.splice(index,1);
  }
  saveProduct() {
    this.product.orgId=this.selectedApp.orgId;
    this.productService.addProduct(this.product).subscribe(v => {
      this.emitSave.emit(v);
    })
  }

}
