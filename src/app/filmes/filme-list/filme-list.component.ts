import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


import { Filme } from '../filme/Filme';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  
  filmes: Filme[]= [];
  filter:string='';
 

  constructor(private activatedRoute : ActivatedRoute){
   
  }

  ngOnInit(): void {
      this.filmes = this.activatedRoute.snapshot.data.filmes;
     
  }

 
}
