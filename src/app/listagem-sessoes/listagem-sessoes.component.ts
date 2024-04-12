import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database/database.service';
import { Sessao } from '../models/sessao.model';

@Component({
  selector: 'app-listagem-sessoes',
  templateUrl: './listagem-sessoes.component.html',
  styleUrl: './listagem-sessoes.component.css'
})
export class ListagemSessoesComponent implements OnInit {

  sessoes: Sessao[] = [];
  displayedColumns: string[] = ['descricao', 'data', 'acoes'];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getSession().subscribe(response => {
      this.sessoes = response;
    })
  }

}
