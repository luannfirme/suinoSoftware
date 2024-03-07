import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database/database.service';
import { Pig } from '../models/pig.model';

@Component({
  selector: 'app-listagem-suinos',
  templateUrl: './listagem-suinos.component.html',
  styleUrl: './listagem-suinos.component.css'
})
export class ListagemSuinosComponent implements OnInit {

  listaSuinos: Pig[] = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getPigs().subscribe(pigsList => {
      this.listaSuinos = pigsList;
    })
  }

}
