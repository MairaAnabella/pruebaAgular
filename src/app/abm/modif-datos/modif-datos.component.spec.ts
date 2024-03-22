import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifDatosComponent } from './modif-datos.component';

describe('ModifDatosComponent', () => {
  let component: ModifDatosComponent;
  let fixture: ComponentFixture<ModifDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
