import { Sessao } from './../models/sessao.model';
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

  constructor(private dbService: DatabaseService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.carregaSuinos();

    this.formGroup = this.formBuilder.group({
      dataSessao: ['', Validators.required],
      descricao: ['', Validators.required],
      brincos:   ['', Validators.required],
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

  removerAtividade(atividade: Atividade): void {
    this.atividades.splice(this.atividades.indexOf(atividade), 1);
    
    if(!this.atividades.length) {
      this.formGroup.get('brincos')?.enable();
    }
  }

  onSuinoSelected(event: any, suino: Pig, atividade: Atividade) {
    if(event.checked) {
      atividade.suinos.push(suino);
    } else {
      const index = atividade.suinos.indexOf(suino);
      atividade.suinos.splice(index, 1);
    }
  }

  submitSessao() {
    const sessao: Sessao = {
      data: this.formGroup.get('dataSessao')?.value,
      descricao: this.formGroup.get('descricao')?.value,
      brincos: this.formGroup.get('brincos')?.value,
      atividades: this.atividades
    };

    if(this.isFormInvalid) {
      this.dbService.postSessions(sessao);
    }

  }

  get isFormInvalid() {
    return this.formGroup.get('dataSessao')?.errors 
    || this.formGroup.get('brincos')?.errors 
    || this.formGroup.get('descricao')?.errors
    || this.atividades.length == 0;
  }

  get atividadesDoForm() {
    return this.formGroup.get('atividades') as FormArray;
  }

  get suinosSelecionados(): Pig[] {
    return this.formGroup.get('brincos')?.value;
  }

}
