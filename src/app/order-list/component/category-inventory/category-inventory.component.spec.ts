import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInventoryComponent } from './category-inventory.component';

describe('CategoryInventoryComponent', () => {
  let component: CategoryInventoryComponent;
  let fixture: ComponentFixture<CategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
