import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Filme } from '../../filme/Filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnChanges {

  @Input() filmes: Filme[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.filmes)
      this.rows = this.groupColumns(this.filmes);
  }

  groupColumns(arg0: any): any {
    const newRows = [];
    for(let index  = 0; index < this.filmes.length; index+=6){
      newRows.push(this.filmes.slice(index, index + 6));
    }
    return newRows;
  }

}
