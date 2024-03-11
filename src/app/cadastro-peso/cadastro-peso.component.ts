import { PesoService } from './../peso.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pig } from '../models/pig.model';
import { DatabaseService } from '../services/database/database.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
 // Importe o serviço de animais

@Component({
  selector: 'app-cadastro-peso',
  templateUrl: './cadastro-peso.component.html',
  styleUrls: ['./cadastro-peso.component.css']
})

export class CadastroPesoComponent implements OnInit {
  pesoForm!: FormGroup;
  suinos: Pig[] = [];

  constructor(
    private fb: FormBuilder, 
    private pesoService: PesoService, 
    private dbService: DatabaseService,
    private router: Router,
    public dialog: MatDialog) {
    this.pesoForm = this.fb.group({
      brincoAnimal: ['', Validators.required],
      dataPesagem: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern(/^\d*\.?\d+$/)]]
    });
  }

  ngOnInit(): void {
    this.dbService.getPigs().subscribe(response => {
      this.suinos = response;
    });
  }

  submitPeso(){
    if(this.pesoForm.valid) {
      this.pesoService.cadastrarPeso(this.pesoForm.value).subscribe(response => {
        this.pesoForm.reset();
        this.dialog.open(DialogCadastroPeso);
        this.router.navigate(['/suino-software/home']);
      })
    }
  }
}

@Component({
  selector: 'cadastro-peso.component-dialog',
  templateUrl: 'cadastro-peso.component-dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogCadastroPeso {
  constructor(public dialogRef: MatDialogRef<DialogCadastroPeso>) { }
}
