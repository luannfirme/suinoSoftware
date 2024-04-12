import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSessoesComponent } from './listagem-sessoes.component';

describe('ListagemSessoesComponent', () => {
  let component: ListagemSessoesComponent;
  let fixture: ComponentFixture<ListagemSessoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemSessoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemSessoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
