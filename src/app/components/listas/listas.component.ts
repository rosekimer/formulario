import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
