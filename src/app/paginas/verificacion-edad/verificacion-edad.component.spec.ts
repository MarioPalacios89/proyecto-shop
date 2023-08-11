import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionEdadComponent } from './verificacion-edad.component';

describe('VerificacionEdadComponent', () => {
  let component: VerificacionEdadComponent;
  let fixture: ComponentFixture<VerificacionEdadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificacionEdadComponent]
    });
    fixture = TestBed.createComponent(VerificacionEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
