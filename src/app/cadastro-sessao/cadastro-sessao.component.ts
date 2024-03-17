import { Atividade } from './../models/atividade.model';
import { Component, OnInit } from '@angular/core';
import { Pig } from '../models/pig.model';
import { DatabaseService } from '../services/database/database.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-sessao',
  templateUrl: './cadastro-sessao.component.html',
  styleUrl: './cadastro-sessao.component.css'
})
export class CadastroSessaoComponent implements OnInit {

  pigs: Pig[] = [];
  formGroup!: FormGroup;
  atividades: Atividade[] = [];

  constructor(private dbService: DatabaseService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dbService.getPigs().subscribe(response => {
      this.pigs = response;
    })
  }

}
