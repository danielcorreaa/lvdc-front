import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { FilmeService } from '../filme/filme.service';
import { Filme } from '../filme/Filme';


@Injectable({providedIn:'root'})
export class FilmeListResolver implements Resolve<Observable<Filme[]>>{

   
    constructor(private filmeService:FilmeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
            Observable<Filme[]> | Observable<Observable<Filme[]>> | Promise<Observable<Filme[]>> {
        return this.filmeService.findAllFilme();
    }
    

}