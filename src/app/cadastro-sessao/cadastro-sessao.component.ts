import { Component, OnInit } from '@angular/core';
import { Pig } from '../models/pig.model';
import { DatabaseService } from '../services/database/database.service';

@Component({
  selector: 'app-cadastro-sessao',
  templateUrl: './cadastro-sessao.component.html',
  styleUrl: './cadastro-sessao.component.css'
})
export class CadastroSessaoComponent implements OnInit {

  pigs: Pig[] = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getPigs().subscribe(response => {
      this.pigs = response;
    })
  }

}
