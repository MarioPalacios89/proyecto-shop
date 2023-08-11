import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetProductosComponent } from './intranet-productos.component';

describe('IntranetProductosComponent', () => {
  let component: IntranetProductosComponent;
  let fixture: ComponentFixture<IntranetProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntranetProductosComponent]
    });
    fixture = TestBed.createComponent(IntranetProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
