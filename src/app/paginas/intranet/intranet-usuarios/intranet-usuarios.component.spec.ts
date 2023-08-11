import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetUsuariosComponent } from './intranet-usuarios.component';

describe('IntranetUsuariosComponent', () => {
  let component: IntranetUsuariosComponent;
  let fixture: ComponentFixture<IntranetUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntranetUsuariosComponent]
    });
    fixture = TestBed.createComponent(IntranetUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
