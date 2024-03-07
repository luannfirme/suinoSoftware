import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrl: './cadastro-suino.component.css'
})
export class CadastroSuinoComponent implements OnInit {

  suinoForm: FormGroup;

  constructor() { 
      this.suinoForm = new FormGroup({
        'brincoAnimal': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
        'brincoPai': new FormControl(null,  [Validators.required, Validators.pattern(/^[0-9]+$/)]),
        'brincoMae': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
        'dataNascimento': new FormControl(null, [Validators.required]),
        'dataSaida': new FormControl(null, [Validators.required]),
        'status': new FormControl(null, [Validators.required]),
        'sexo': new FormControl(null, [Validators.required])
    })
  }
  
  onSubmit(){
    console.log(this.suinoForm.value);
  }

  ngOnInit(){
  }

}