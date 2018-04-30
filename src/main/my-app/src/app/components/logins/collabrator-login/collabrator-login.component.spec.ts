import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabratorLoginComponent } from './collabrator-login.component';

describe('CollabratorLoginComponent', () => {
  let component: CollabratorLoginComponent;
  let fixture: ComponentFixture<CollabratorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabratorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabratorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
