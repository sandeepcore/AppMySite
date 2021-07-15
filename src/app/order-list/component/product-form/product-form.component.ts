import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
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

  removable: boolean = true;
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
  colorText: string = "";
  
  @Output() emitSave: EventEmitter<ProductModel> = new EventEmitter();
  @Output() emitClose: EventEmitter<boolean> = new EventEmitter();

  selectedApp: AppModel = new AppModel();
  bigImageView: Subject<string> = new Subject<string>();
  fileData: File[] = [];

  constructor(private productService: ProductService, private appService: AppService) {
    this.selectedApp = appService.selectedApp;
  }

  ngOnInit() {
    if (this.product != null && this.product._id) {
      this.text = 'Edit';
    }
    // this.bigImageView.pipe(
    //   debounceTime(1600),
    //   distinctUntilChanged())
    this.bigImageView
      .subscribe(value => {
        this.isImageBigView = true;
        this.onHoverImage = value;
      });
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

  addColor() {
    if (this.product.colorAttributes && this.product.colorAttributes.length > 0) {
      this.product.colorAttributes.push(this.colorText);
    } else {
      this.product.colorAttributes = [this.colorText];
    }
    this.colorText = "";
  }

  removeColor(index: number) {
    if (index > -1) this.product.colorAttributes.splice(index, 1);
  }
  sizeText: string = "";
  addSize() {
    if (this.product.sizeAttributes && this.product.sizeAttributes.length > 0) {
      this.product.sizeAttributes.push(this.sizeText);
    } else {
      this.product.sizeAttributes = [this.sizeText];
    }
    this.sizeText = "";
  }

  removeSize(index: number) {
    if (index > -1) this.product.sizeAttributes.splice(index, 1);
  }

  image: boolean = false;
  selectedFile:string="";
  uploadPhoto(fileInput: any) {
    this.image = this.product.imageUrl.length == 0 ? false : true;
    this.fileData = <File[]>(fileInput.target.files);
    // this.totalFileSize = 0;
    if (this.fileData.length > 6) {
      // this.toast.warning("You can upload only 20 images");
      // this.image = (this.imgCountArr.length > 0 || this.imgUrlArr.length > 0) ? false : true;
      return;
    }

    if ((this.fileData.length + this.product.imageUrl.length) > 6) {
      // this.toast.warning("You can upload only 20 images");
      this.image = true;
      return;
    }

    // for (let i = 0; i < this.fileData.length; i++) {
    let file = this.fileData[0];
    if (file != null) {
      // this.imgCountArr.push(file);
      this.productService.upload(file).subscribe(v => {
        this.addImage(v);
        this.selectedFile="";
      });
    }
    // }
  }
  addImage(value: string) {
    if (this.product.imageUrl && this.product.imageUrl.length > 0) {
      this.product.imageUrl.push(value);
    } else {
      this.product.imageUrl = [value];
    }
    value = "";
  }


  removeImage(index: number) {
    // alert(index);
    if (index > -1) this.product.imageUrl.splice(index, 1);
  }
  
  isImageBigView: boolean = false;
  onHoverImage: string = "";
  
  mouseLeaveImg() {
    this.isImageBigView = false;
    this.onHoverImage = '';
  }
  saveProduct() {
    this.product.orgId = this.selectedApp.orgId;
    this.productService.addProduct(this.product).subscribe(v => {
      this.emitSave.emit(v);
    })
  }

  closePopUp(){
    this.emitClose.emit(true);
  }

}
