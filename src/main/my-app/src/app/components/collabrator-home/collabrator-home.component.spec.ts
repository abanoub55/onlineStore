import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabratorHomeComponent } from './collabrator-home.component';

describe('CollabratorHomeComponent', () => {
  let component: CollabratorHomeComponent;
  let fixture: ComponentFixture<CollabratorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabratorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabratorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
