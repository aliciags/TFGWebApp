import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Recipe } from '../../model/recipe';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [ LocalStorageService ]
})
export class RecipeComponent implements OnInit {

  public recipe: Recipe;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor(private router: Router,
              private localStorage: LocalStorageService, private apiService: ApiService) {
      this.recipe = {
        name: '',
        timing: 1,
        guest: 1,
        meal: [],
        diet: '',
        ingredients: [],
        steps: [],
        image: ''
      };
  }

  ngOnInit(): void {
    if (this.localStorage.get('token') == null){
      this.router.navigate(['/login']);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
      this.apiService.get('/recipe/60abe2524293963bd0141cde', this.httpOptions)
      .subscribe(response => {
        this.recipe = response;
      },
      error => {
        if (error.error.msg === 'recipe not found'){
          this.router.navigate(['/notfound']);
        } else {
          console.log('Internal server error');
        }
      });
    }
  }
}
