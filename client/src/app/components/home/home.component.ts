import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from 'src/app/service/api.service';
import { Recipe } from 'src/app/model/recipe';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public recipes: Recipe[];
  public environment: string;
  public filters: boolean;
  public searchText: string;
  public searchControl: FormControl;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor(private localStorage: LocalStorageService,
              private apiService: ApiService) {
      this.recipes = [];
      this.environment = '';
      this.filters = false;
      this.searchText = '';
      this.searchControl = new FormControl();
      this.searchControl.valueChanges
        .subscribe((value: string) => {
          if ( value.length > 0 ){
            this.apiService.post('/filter', {name: value})
            .subscribe( response => {
              console.log('r', response);
              this.recipes = response;
            }, error => {
              console.log('e', error);
            });
          } else {
            this.apiService.get('/').subscribe(response => {
              this.recipes = response;
              // this.setRecipes(this.recipes);
            },
            err => {
              // internal server error
              console.log(err);
            });
          }
      });
  }

  ngOnInit(): void{
    if (this.localStorage.get('token') != null) {
      this.environment = 'home';
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
    }
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

  onSave(rid: string): void{
    this.apiService.put('/recipe/save/' + rid + '&' + this.localStorage.get('email'), {}, this.httpOptions)
      .subscribe(response => {
        console.log(response);
        if (response.msg === 'recipe saved'){
          // make toast
          console.log('saved');
        }
      }, error => {
        console.log(error);
      });
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
