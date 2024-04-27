import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database/database.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrl: './cadastro-suino.component.css'
})
export class CadastroSuinoComponent implements OnInit {

  suinoForm: FormGroup;

  constructor(private dbService: DatabaseService, public dialog: MatDialog, private router: Router) {
    this.suinoForm = new FormGroup({
      'brincoAnimal': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      'brincoPai': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      'brincoMae': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      'dataNascimento': new FormControl(null, [Validators.required]),
      'dataSaida': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
      'sexo': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    if (this.suinoForm.valid) {
      this.dbService.postPig(this.suinoForm.value);
      this.suinoForm.reset();
      this.dialog.open(DialogCadastroSuino);
      this.router.navigate(['/suino-software/listar-suinos']);
    } else {
      return;
    }

  }

  ngOnInit() {
  }
}

@Component({
  selector: 'cadastro-suino.component-dialog',
  templateUrl: 'cadastro-suino.component-dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogCadastroSuino {
  constructor(public dialogRef: MatDialogRef<DialogCadastroSuino>) { }
}