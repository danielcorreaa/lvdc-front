import { Pipe, PipeTransform } from '@angular/core';
import { Filme } from '../filme/Filme';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

    transform(filmes: Filme[], descriptionQuery:string) {        
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();
        if(descriptionQuery){
            return filmes.filter(filme =>
                filme.titulo.toLowerCase().includes(descriptionQuery)
            );
        }else{
            return filmes;
        }
    }
}