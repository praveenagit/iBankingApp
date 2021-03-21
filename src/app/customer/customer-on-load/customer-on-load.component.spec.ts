import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOnLoadComponent } from './customer-on-load.component';

describe('CustomerOnLoadComponent', () => {
  let component: CustomerOnLoadComponent;
  let fixture: ComponentFixture<CustomerOnLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOnLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOnLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
