import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros.model';
import { LibrosService } from 'src/app/services/libros.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  libro: Libros = new Libros();
  datosSudmid = false;


  constructor(private libroServices: LibrosService) { }

  guardarLibros(): void{
    this.libroServices.crear(this.libro).then(() =>{
      console.log('el libro fue creado y guardado con exito!');
      this.datosSudmid = true;
    });
  }

  nuevolibro(): void{
    this.datosSudmid = false;
    this.libro = new Libros();
  }

  ngOnInit(): void {
  }

}
