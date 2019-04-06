
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FilmeComponent } from './filme/filme.component';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmesComponent } from './filme-list/filmes/filmes.component';
import { FilterByDescription } from './filme-list/filter-by-description.pipe';
import { SearchComponent } from './filme-list/search/search.component';
import { DarkenOnHouverModule } from '../shared/directives/dark-on-houver/darken-on-houver.module';


@NgModule({
    declarations:  [ FilmeComponent, FilmeListComponent, FilmeFormComponent,
         FilmesComponent, FilterByDescription, SearchComponent
    ],
    imports:[HttpClientModule, CommonModule,DarkenOnHouverModule]
    
})
export class FilmeModule{}