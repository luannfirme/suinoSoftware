import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemHistoricoComponent } from './listagem-historico.component';

describe('ListagemHistoricoComponent', () => {
  let component: ListagemHistoricoComponent;
  let fixture: ComponentFixture<ListagemHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
