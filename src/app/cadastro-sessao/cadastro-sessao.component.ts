import { Atividade } from './../models/atividade.model';
import { Component, OnInit } from '@angular/core';
import { Pig } from '../models/pig.model';
import { DatabaseService } from '../services/database/database.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-sessao',
  templateUrl: './cadastro-sessao.component.html',
  styleUrl: './cadastro-sessao.component.css'
})
export class CadastroSessaoComponent implements OnInit {

  pigs: Pig[] = [];
  formGroup!: FormGroup;
  atividades: Atividade[] = [];
  nomeAtividade: string = '';
  displayedColumns: string[] =  ['nome'];

  constructor(private dbService: DatabaseService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.carregaSuinos();

    this.formGroup = this.formBuilder.group({
      dataSessao: ['', Validators.required],
      brincos:   ['', Validators.required],
      descricao: ['', Validators.required],
      atividades: this.formBuilder.array([], Validators.required)
    })
  }

  carregaSuinos() {
    this.dbService.getPigs().subscribe(response => {
      this.pigs = response;
    })
  }

  adicionarAtividade(){
    let atividade: Atividade = {
      nome: this.nomeAtividade,
      data: this.formGroup.get('dataSessao')?.value,
      suinos: []
    }
    this.atividades = [...this.atividades, atividade];
    this.atividadesDoForm.push(this.formBuilder.group({
      nome: ['', Validators.required]
    }));

    this.nomeAtividade = '';
    this.formGroup.get('brincos')?.disable();
  }

  get isFormValid() {
    return this.formGroup.valid && this.atividades.length > 0;
  }

  get atividadesDoForm() {
    return this.formGroup.get('atividades') as FormArray;
  }

}
