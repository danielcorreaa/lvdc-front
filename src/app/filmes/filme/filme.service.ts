import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from './Filme';

const api = 'http://localhost:8080/filme';

@Injectable({providedIn: 'root'})
export class FilmeService{

   constructor(private http:HttpClient){}

   findAllFilme(){
       return this.http
           .get<Filme[]>(api);       
   }

}