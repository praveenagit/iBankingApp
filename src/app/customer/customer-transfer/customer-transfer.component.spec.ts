import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransferComponent } from './customer-transfer.component';

describe('CustomerTransferComponent', () => {
  let component: CustomerTransferComponent;
  let fixture: ComponentFixture<CustomerTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
