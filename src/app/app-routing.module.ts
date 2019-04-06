import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeListComponent } from './filmes/filme-list/filme-list.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { FilmeListResolver } from './filmes/filme-list/filme-list.resolver';
import { SinginComponent } from './home/singin/singin.component';

const routes: Routes = [
  {
    path: "filmes", 
    component: FilmeListComponent,
    resolve:{
      filmes: FilmeListResolver
    }
  },
  {
    path: '', 
    component: SinginComponent
  },
  {path: "filme/add", component: FilmeFormComponent},
  {path: "**", component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
