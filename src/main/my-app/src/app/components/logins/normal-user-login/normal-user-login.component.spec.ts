import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserLoginComponent } from './normal-user-login.component';

describe('NormalUserLoginComponent', () => {
  let component: NormalUserLoginComponent;
  let fixture: ComponentFixture<NormalUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
