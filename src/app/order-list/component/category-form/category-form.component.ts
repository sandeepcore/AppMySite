import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppModel } from 'src/app/dashboard/Model/AppModel';
import { AppService } from 'src/app/dashboard/service/app.service';
import { ClosePopupDirective } from '../../directive/close-popup.directive';
import { CategoryModel, ItemCategory, SubCategory } from '../../model/CategoryModel';
import { CatService } from '../../service/cat.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  text: string = "";
  @Input() level: number = 1;
  selectedApp: AppModel = new AppModel();
  @Input() selectedCategory: CategoryModel = new CategoryModel();
  @Input() selectedSubCategory: SubCategory = new SubCategory();
  @Input() selectedItemCategory: ItemCategory = new ItemCategory();
  @Output() emitClose: EventEmitter<boolean> = new EventEmitter();
  catName: string = "";
  constructor(private categoryService: CatService, private appService: AppService) {
    this.selectedApp = appService.selectedApp;

  }

  ngOnInit() {
    if (this.level == 1) {
      this.text = this.selectedCategory._id ? 'Edit ' : 'Add '
      this.text += "Category"
      this.catName = this.selectedCategory._id ? this.selectedCategory.catName : '';
    } else if (this.level == 2) {
      this.text = this.selectedSubCategory.id ? 'Edit ' : 'Add '
      this.text += "Sub Category"
      this.catName = this.selectedSubCategory.id ? this.selectedSubCategory.subCategory : '';
    } else if (this.level == 3) {
      this.text = this.selectedItemCategory.id ? 'Edit ' : 'Add '
      this.text += "Item Category"
      this.catName = this.selectedItemCategory.id ? this.selectedItemCategory.name : '';
    }
  }


  saveCategory() {
    if (this.level == 1) {
      this.selectedCategory.catName = this.catName;
      this.selectedCategory.orgId = this.selectedApp.orgId;
    } else if (this.level == 2) {
      this.selectedSubCategory.subCategory = this.catName;
      if(!this.selectedSubCategory.id) this.selectedSubCategory.id= this.randomString(36);
      if (this.selectedCategory.subCat.length > 0) {
        this.selectedCategory.subCat.push(this.selectedSubCategory);
      } else {
        this.selectedCategory.subCat = [this.selectedSubCategory];
      }
    } else {
      this.selectedItemCategory.name = this.catName;
      if(!this.selectedItemCategory.id) this.selectedItemCategory.id= this.randomString(36);
      if (this.selectedSubCategory.Items.length > 0) {
        this.selectedSubCategory.Items.push(this.selectedItemCategory);
      } else {
        this.selectedSubCategory.Items = [this.selectedItemCategory];
      }
      // this.selectedSubCategory.Items = [this.selectedItemCategory];
      // this.selectedCategory.subCat = [this.selectedSubCategory];
    }
    if (this.selectedCategory._id) {
      this.categoryService.editCategoriesData(this.selectedCategory._id, this.selectedCategory).subscribe(v => {
        this.selectedCategory = v;
        this.closePopup();
      })
    } else {
      this.categoryService.addCategoriesData(this.selectedCategory, this.selectedApp._id).subscribe(v => {
        this.selectedCategory = v;
        this.closePopup();
      })
    }

  }

  closePopup() {
    this.emitClose.emit(true);
  }

  randomString(length) {
    var result = '';
    //let chars='0123456789abcdefghijklmnopqrstuvwxyz-';
    //for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
// var rString = randomString(40, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
}
