import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsUpdateComponent } from './customer-details-update.component';

describe('CustomerDetailsUpdateComponent', () => {
  let component: CustomerDetailsUpdateComponent;
  let fixture: ComponentFixture<CustomerDetailsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
