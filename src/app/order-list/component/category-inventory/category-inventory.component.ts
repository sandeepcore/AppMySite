import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppModel } from 'src/app/dashboard/Model/AppModel';
import { AppService } from 'src/app/dashboard/service/app.service';
import { ClosePopupDirective } from '../../directive/close-popup.directive';
import { CategoryModel, ItemCategory, SubCategory } from '../../model/CategoryModel';
import { CatService } from '../../service/cat.service';

@Component({
  selector: 'app-category-inventory',
  templateUrl: './category-inventory.component.html',
  styleUrls: ['./category-inventory.component.scss']
})
export class CategoryInventoryComponent implements OnInit {

  isForm: boolean = false;
  level: number = 0;
  selectedApp: AppModel = new AppModel();
  catList: CategoryModel[] = [];
  selectedCategory: CategoryModel = new CategoryModel();

  subCatList: SubCategory[] = [];
  selectedSubCategory: SubCategory = new SubCategory();

  itemCatList: ItemCategory[] = [];
  selectedItemCategory: ItemCategory = new ItemCategory();
  closePopup$: Observable<boolean> = new BehaviorSubject(false);

  constructor(private categoryService: CatService, private appService: AppService) {
    this.selectedApp = appService.selectedApp;
  }
  ngOnInit() {
    this.loadGrid();
  }
  loadGrid() {
    this.categoryService.allCategories(this.selectedApp._id).subscribe(v => {
      this.catList = v;
      if (this.catList.length > 0) {
        this.setSelectedCat(this.catList[0]);
      }
    })
  }
  setSelectedCat(cat: CategoryModel) {
    this.selectedCategory = cat;
    this.subCatList = this.selectedCategory.subCat;
    if (this.subCatList && this.subCatList.length > 0) {
      this.setSelectedSubCat(this.subCatList[0]);
    } else {
      this.subCatList = [];
      this.setSelectedSubCat(new SubCategory());
    }
  }

  setSelectedSubCat(cat: SubCategory) {
    this.selectedSubCategory = cat;
    this.itemCatList = this.selectedSubCategory.Items;
    if (this.itemCatList && this.itemCatList.length > 0) {
      this.setSelectedItemCat(this.itemCatList[0]);
    } else {
      this.itemCatList = [];
      this.setSelectedItemCat(new ItemCategory());
    }
  }
  setSelectedItemCat(cat: ItemCategory) {
    this.selectedItemCategory = cat;
  }

  openFormCreate(level: number) {
    if (level == 1) {
      this.setSelectedCat(new CategoryModel());
    } else if (level == 2) {
      this.setSelectedSubCat(new SubCategory());
    } else if (level == 3) {
      this.selectedItemCategory = new ItemCategory();
    }
    this.isForm = true;
    this.level = level;
  }
  openFormEdit(level: number) {
    this.isForm = true;
    this.level = level;
  }

  emitClosePopup() {
    this.isForm = false;
    this.level = -1;
    this.loadGrid();
  }
}
