import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database/database.service';
import { ActivatedRoute } from '@angular/router';
import { Sessao } from '../models/sessao.model';

@Component({
  selector: 'app-detalhes-sessao',
  templateUrl: './detalhes-sessao.component.html',
  styleUrl: './detalhes-sessao.component.css'
})
export class DetalhesSessaoComponent implements OnInit {

  private idSessao!: string;
  sessao!: Sessao;

  constructor(private dbService: DatabaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idSessao = this.route.snapshot.paramMap.get('id')!;
    this.dbService.getSessionById(this.idSessao).subscribe(response => {
      this.sessao = response;
      console.log(this.sessao.brincos);
    })
  }

}
