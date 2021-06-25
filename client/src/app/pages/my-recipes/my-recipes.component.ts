import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/model/recipe';
import { ApiService } from 'src/app/core/service/api.service';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  public recipes: Recipe[];
  public rid: string;
  public ingredientsFilter: string[];
  public environment: string;
  public showModal: boolean;
  public searchControl: FormControl;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor( private router: Router,
               private apiService: ApiService,
               private localStorage: LocalStorageService ) {
    this.recipes = [];
    this.environment = 'myrecipes';
    this.rid = '';
    this.ingredientsFilter = [];
    this.showModal = false;
    this.searchControl = new FormControl();
    this.searchControl.valueChanges
        .subscribe((value: string) => {
          if ( value.length > 0 ){
            // asi no se puede hacer porq no filtra las recetas q sean solo del user
            // lo hace con tda la colleccion
            this.apiService.post('/filter', {name: value, user: this.localStorage.get('email')})
            .subscribe( response => {
              // console.log('r', response);
              this.recipes = response;
            }, error => {
              console.log(error);
            });
          } else {
            this.apiService.get('/recipe/book/' + this.localStorage.get('email'), this.httpOptions)
              .subscribe(response => {
                this.recipes = response;
                // this.setRecipes(this.recipes);
              },
              error => {
                // internal server error
                console.log(error);
            });
          }
      });
  }

  ngOnInit(): void {
    if (this.localStorage.get('token') == null) {
      this.router.navigate(['/login']);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
      this.apiService.get('/recipe/book/' + this.localStorage.get('email'), this.httpOptions).subscribe(response => {
        this.recipes = response;
      },
      error => {
        if (error.status === 401 ){
          this.router.navigateByUrl('/login', {state: {msg: 'Unauthorized'}});
        } else {
          console.log(error);
        }
      });
    }
  }

  onFilter(n: string, d: string, m: string): void{
    // console.log(n, d, m);
    this.apiService.post('/filter', {name: n, diet: d, meal: m, ingredients: this.ingredientsFilter, user: this.localStorage.get('email')})
            .subscribe( response => {
              console.log('r', response);
              this.recipes = response;
            }, error => {
              console.log('e', error);
            });
  }

  onDelete(): void{
    this.apiService.delete('/recipe/' + this.rid + '&' + this.localStorage.get('email'), this.httpOptions)
      .subscribe(response => {
        // console.log(response);
        if (response.msg === 'recipe removed'){
          this.ngOnInit();
        }
      }, error => {
        console.log(error);
      });
    this.showModal = false;
  }

  onShow(rid: string): void {
    this.rid = rid;
    this.showModal = true;
  }

  /* onAddRecipe(): void{
    this.router.navigate(['recipe/recipe-form']);
  }*/

  onAddIngredient(ingredient: string): void{
    this.apiService.get('/ingredient/' + ingredient).subscribe( ing => {
      if ( this.ingredientsFilter.indexOf(this.ingredientsFilter.filter( i => i === ing.name)[0], 0) === -1 ){
        this.ingredientsFilter.push(ing.name);
      } else {
        // already in the list
      }
    }, error => {
      // not a valid ingredient
      console.log(error);
    });
  }

  onDeleteIngredient(ingredient: string): void{
    const i = this.ingredientsFilter.filter( ing => ing === ingredient)[0];
    const index = this.ingredientsFilter.indexOf(i, 0);
    if ( index > -1 ) {
      this.ingredientsFilter.splice(index, 1);
    }
  }

}
