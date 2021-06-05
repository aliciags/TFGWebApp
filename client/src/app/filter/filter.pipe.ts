import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../model/recipe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Recipe[], searchText: string): Recipe[] {

    if (!items){
      return [];
    }

    if (!searchText){
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });

  }

}


