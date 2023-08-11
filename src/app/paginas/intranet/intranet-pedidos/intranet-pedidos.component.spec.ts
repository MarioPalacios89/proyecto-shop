import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetPedidosComponent } from './intranet-pedidos.component';

describe('IntranetPedidosComponent', () => {
  let component: IntranetPedidosComponent;
  let fixture: ComponentFixture<IntranetPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntranetPedidosComponent]
    });
    fixture = TestBed.createComponent(IntranetPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
