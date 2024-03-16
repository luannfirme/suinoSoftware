import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSessaoComponent } from './editar-sessao.component';

describe('EditarSessaoComponent', () => {
  let component: EditarSessaoComponent;
  let fixture: ComponentFixture<EditarSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarSessaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
