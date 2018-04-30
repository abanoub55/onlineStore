import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOwnerRegisterComponent } from './store-owner-register.component';

describe('StoreOwnerRegisterComponent', () => {
  let component: StoreOwnerRegisterComponent;
  let fixture: ComponentFixture<StoreOwnerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOwnerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOwnerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
