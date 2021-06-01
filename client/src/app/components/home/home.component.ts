import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from 'src/app/service/api.service';
import { Recipe } from 'src/app/model/recipe';
import { RecipeCard } from 'src/app/model/recipe-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public recipes: Recipe[];
  public filters: boolean;
  // public card: RecipeCard[];

  constructor(private breakpointObserver: BreakpointObserver,
              private apiService: ApiService) {
      this.recipes = [];
      // this.card = [];
      this.filters = false;
  }

  ngOnInit(): void{
    this.apiService.get('/').subscribe(response => {
      this.recipes = response;
      // this.setRecipes(this.recipes);
      console.log(this.recipes);
    },
    err => {
      // internal server error
      console.log(err);
    });
  }

  onFilter(): void{
    this.filters ? this.filters = false : this.filters = true;
  }

  /*setRecipes(recipes: Recipe[]): void{
    this.recipes.splice(0, this.card.length);
    recipes.forEach( r => {
      let c: RecipeCard;
      c = {
        _id: r._id,
        name: r.name,
        diet: r.diet,
        meals: r.meal
      };
      this.card.push(c);
    });
  }*/
}
