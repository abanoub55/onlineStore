import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOwnerHomeComponent } from './store-owner-home.component';

describe('StoreOwnerHomeComponent', () => {
  let component: StoreOwnerHomeComponent;
  let fixture: ComponentFixture<StoreOwnerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOwnerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOwnerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
