import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database/database.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-suino',
  templateUrl: './editar-suino.component.html',
  styleUrl: './editar-suino.component.css'
})
export class EditarSuinoComponent implements OnInit {

  suinoForm!: FormGroup;
  private suinoId: string = '';

  constructor(private dbService: DatabaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.suinoForm = new FormGroup({
      'brincoAnimal': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      'brincoPai': new FormControl(null,  [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      'brincoMae': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      'dataNascimento': new FormControl(null, [Validators.required]),
      'dataSaida': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
      'sexo': new FormControl(null, [Validators.required])
    });

    this.suinoId = this.route.snapshot.paramMap.get('id')!;
    this.dbService.getPigById(this.suinoId).subscribe(response => {
      this.suinoForm.setValue(response);
    })
  }

  onSubmit() {
    if (this.suinoForm.valid) {
      this.dbService.putPig(this.suinoId, this.suinoForm.value).subscribe(response => {
        if(response.status == 200) {
          setTimeout(() => {
            alert('As alterações foram salvas!');
            this.router.navigate(['/suino-software/listar-suinos']);
          })
        }
      })
    } else {
      return;
    }
  }

}
