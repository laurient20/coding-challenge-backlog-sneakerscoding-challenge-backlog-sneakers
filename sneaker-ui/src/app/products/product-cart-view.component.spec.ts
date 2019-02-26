import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartViewComponent } from './product-cart-view.component';

describe('ProductCartViewComponent', () => {
  let component: ProductCartViewComponent;
  let fixture: ComponentFixture<ProductCartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
