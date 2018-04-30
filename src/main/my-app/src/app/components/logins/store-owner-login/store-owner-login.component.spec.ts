import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOwnerLoginComponent } from './store-owner-login.component';

describe('StoreOwnerLoginComponent', () => {
  let component: StoreOwnerLoginComponent;
  let fixture: ComponentFixture<StoreOwnerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOwnerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOwnerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
