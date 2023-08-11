import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPrevioCarritoComponent } from './producto-previo-carrito.component';

describe('ProductoPrevioCarritoComponent', () => {
  let component: ProductoPrevioCarritoComponent;
  let fixture: ComponentFixture<ProductoPrevioCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoPrevioCarritoComponent]
    });
    fixture = TestBed.createComponent(ProductoPrevioCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
