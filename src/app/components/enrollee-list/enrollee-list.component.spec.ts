import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeListComponent } from './enrollee-list.component';

describe('EnrolleeListComponent', () => {
  let component: EnrolleeListComponent;
  let fixture: ComponentFixture<EnrolleeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolleeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
