import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankertransactionComponent } from './bankertransaction.component';

describe('BankertransactionComponent', () => {
  let component: BankertransactionComponent;
  let fixture: ComponentFixture<BankertransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankertransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankertransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
