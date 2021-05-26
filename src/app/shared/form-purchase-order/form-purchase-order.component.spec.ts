import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPurchaseOrderComponent } from './form-purchase-order.component';

describe('FormPurchaseOrderComponent', () => {
  let component: FormPurchaseOrderComponent;
  let fixture: ComponentFixture<FormPurchaseOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPurchaseOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
