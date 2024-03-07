import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';

@Component({
  selector: 'app-cadastro-peso',
  templateUrl: './cadastro-peso.component.html',
  styleUrl: './cadastro-peso.component.css'
})
export class CadastroPesoComponent implements OnInit {

  pesoForm: FormGroup;

  constructor(private dbService: DatabaseService) { 
      this.pesoForm = new FormGroup({
        'brincoAnimal': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
        'peso': new FormControl(null,  [Validators.required, Validators.pattern(/^[0-9]+$/)]),
        'dataPesagem': new FormControl(null, [Validators.required]),
    })
  }
  
  onSubmit(){
    console.log(this.pesoForm.value);
  }

  ngOnInit(){
  }

}