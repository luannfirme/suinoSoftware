import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';

@Component({
  selector: 'app-editar-peso',
  templateUrl: './editar-peso.component.html',
  styleUrl: './editar-peso.component.css'
})
export class EditarPesoComponent implements OnInit {
  private pesoId: string = '';
  pesoForm!: FormGroup;

  constructor(
    private dbService: DatabaseService,
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.pesoForm = this.fb.group({
      brincoAnimal: ['', Validators.required],
      dataPesagem: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern(/^\d*\.?\d+$/)]]
    });
    this.pesoId = this.route.snapshot.paramMap.get('id')!;
    this.dbService.getWeightById(this.pesoId).subscribe(response => [
      this.pesoForm.setValue(response)
    ])
  }

  submitPeso() {
    if(this.pesoForm.valid) {
      this.dbService.putWeight(this.pesoId, this.pesoForm.value).subscribe(response => {
        if(response.status == 200) {
          setTimeout(() => {
            alert('As alterações foram salvas!');
            this.router.navigate(['/suino-software/consultar-pesos']);
          })
        }
      })
    } else {
      return;
    }
  }
}
