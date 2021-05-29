import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenProductComponent } from './top-ten-product.component';

describe('TopTenProductComponent', () => {
  let component: TopTenProductComponent;
  let fixture: ComponentFixture<TopTenProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
