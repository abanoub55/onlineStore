import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabratorRegisterComponent } from './collabrator-register.component';

describe('CollabratorRegisterComponent', () => {
  let component: CollabratorRegisterComponent;
  let fixture: ComponentFixture<CollabratorRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabratorRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabratorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
