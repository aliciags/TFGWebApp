import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  public recipes: Recipe[];
  public rid: string;
  public filters: boolean;
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
    this.filters = false;
    this.showModal = false;
    this.searchControl = new FormControl();
    this.searchControl.valueChanges
        .subscribe((value: string) => {
          if ( value.length > 0 ){
            // asi no se puede hacer porq no filtra las recetas q sean solo del user
            // lo hace con tda la colleccion
            this.apiService.post('/filter', {name: value, user: this.localStorage.get('email')})
            .subscribe( response => {
              console.log('r', response);
              this.recipes = response;
            }, error => {
              console.log('e', error);
            });
          } else {
            this.apiService.get('/recipe/book/' + this.localStorage.get('email'), this.httpOptions)
              .subscribe(response => {
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

  ngOnInit(): void {
    if (this.localStorage.get('token') == null) {
      this.router.navigate(['/login']);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
      this.apiService.get('/recipe/book/' + this.localStorage.get('email'), this.httpOptions).subscribe(response => {
        this.recipes = response;
      },
      err => {
        console.log(err);
      });
    }
  }

  onDelete(): void{
    this.apiService.delete('/recipe/' + this.rid + '&' + this.localStorage.get('email'), this.httpOptions)
      .subscribe(response => {
        console.log(response);
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

  onFilter(): void {
    this.filters ? this.filters = false : this.filters = true;
  }

}
