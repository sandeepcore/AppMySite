import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleScreenComponent } from './module-screen.component';

describe('ModuleScreenComponent', () => {
  let component: ModuleScreenComponent;
  let fixture: ComponentFixture<ModuleScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
