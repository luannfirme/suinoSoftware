import { ActivatedRoute, Router } from '@angular/router';
import { PesoService } from './../peso.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-peso',
  templateUrl: './editar-peso.component.html',
  styleUrl: './editar-peso.component.css'
})
export class EditarPesoComponent implements OnInit {
  private pesoId: string = '';
  pesoForm!: FormGroup;

  constructor(
    private pesoService: PesoService, 
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
    this.pesoService.getPesoById(this.pesoId).subscribe(response => [
      this.pesoForm.setValue(response)
    ])
  }

  submitPeso() {
    if(this.pesoForm.valid) {
      this.pesoService.editarPeso(this.pesoId, this.pesoForm.value).subscribe(response => {
        if(response.status == 200) {
          setTimeout(() => {
            this.router.navigate(['/suino-software/consultar-pesos']);
          })
        }
      })
    } else {
      return;
    }
  }
}
