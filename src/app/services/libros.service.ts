import { Injectable } from '@angular/core';
import { Libros } from '../models/libros.model';
import {AngularFireDatabase , AngularFireList} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private dbLibros = '/libreria';

  misLibrosRef : AngularFireList<Libros>;


  constructor(private db:AngularFireDatabase) {
    this.misLibrosRef = db.list(this.dbLibros);
  }

  obtenertodo(): AngularFireList<Libros>{
    return this.misLibrosRef;
  }

  crear(libro:Libros):any{
    return this.misLibrosRef.push(libro)
  }

  actualizar(id:string,valor:any): Promise<void>{
    return this.misLibrosRef.update(id,valor)
  }

  borrar(id:string): Promise<void> {
    return this.misLibrosRef.remove(id);
  }

  borrarTodo(): Promise<void>{
    return this.misLibrosRef.remove();
  }



}

