import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListasComponent } from './components/listas/listas.component';

const ROUTES: Routes = [
  {path:'', redirectTo:'lista' ,pathMatch:'full'},
  {path:'lista', component:ListasComponent},
  {path:'agregar', component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
