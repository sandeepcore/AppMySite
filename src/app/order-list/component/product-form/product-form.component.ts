import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel, ItemCategory, SubCategory } from '../../model/CategoryModel';
import { ProductModel } from '../../model/ProductModel';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() isShow:boolean=false;
  @Input() product:ProductModel=new ProductModel();
  @Input() catList:CategoryModel[]=[];
  selectedCategory: CategoryModel = new CategoryModel();

  subCatList: SubCategory[] = [];
  selectedSubCategory: SubCategory = new SubCategory();

  itemCatList: ItemCategory[] = [];
  selectedItemCategory: ItemCategory = new ItemCategory();

  text:string='Create';
  id:string="";
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

emitSave:EventEmitter<ProductModel> =new EventEmitter();
emitClose:EventEmitter<ProductModel> =new EventEmitter();
  constructor(private productService:ProductService) {
   }

  ngOnInit() {
    if(this.product!=null && this.product._id){
      this.text='Edit';
    }
  }

  setSelectedCat(cat: CategoryModel,isClicked:boolean) {
    this.selectedCategory = cat;
    this.subCatList = this.selectedCategory.subCat;
    if (this.subCatList && this.subCatList.length > 0) {
      this.setSelectedSubCat(this.subCatList[0],false);
    } else {
      this.subCatList = [];
      this.setSelectedSubCat(new SubCategory(),false);
    }
  }

  setSelectedSubCat(cat: SubCategory,isClicked:boolean) {
    this.selectedSubCategory = cat;
    this.itemCatList = this.selectedSubCategory.Items;
  }
  
  saveProduct(){
    this.productService.addProduct(this.product).subscribe(v=>{
      this.emitSave.emit(v);
    })
  }

}
