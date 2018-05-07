import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOwnerPreHomeComponent } from './store-owner-pre-home.component';

describe('StoreOwnerPreHomeComponent', () => {
  let component: StoreOwnerPreHomeComponent;
  let fixture: ComponentFixture<StoreOwnerPreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOwnerPreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOwnerPreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
