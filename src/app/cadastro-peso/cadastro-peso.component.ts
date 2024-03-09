import { PesoService } from './../peso.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 // Importe o serviço de animais

@Component({
  selector: 'app-cadastro-peso',
  templateUrl: './cadastro-peso.component.html',
  styleUrls: ['./cadastro-peso.component.css']
})

export class CadastroPesoComponent {
  pesoForm!: FormGroup;

  constructor(private fb: FormBuilder, private PesoService: PesoService) {
    this.pesoForm = this.fb.group({
      brincoAnimal: ['', Validators.required],
      dataPesagem: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern(/^\d*\.?\d+$/)]]
    });
  }
  // submitPeso(){
  //   if (this.pesoForm.valid) {
  //     this.pesoService.cadastrarPeso(this.pesoForm.value).subscribe(
  //       (response) => {
  //         console.log('Peso cadastrado com sucesso!', response);
  //         // Limpar formulário ou executar outra ação necessária após o cadastro
  //       },
  //       (error) => {
  //         console.error('Erro ao cadastrar peso:', error);
  //       }
  //     );
  //   } else {
  //     console.log('Formulário inválido');
  //   }
  // }
}

