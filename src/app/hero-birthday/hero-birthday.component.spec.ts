import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBirthdayComponent } from './hero-birthday.component';

describe('HeroBirthdayComponent', () => {
  let component: HeroBirthdayComponent;
  let fixture: ComponentFixture<HeroBirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
