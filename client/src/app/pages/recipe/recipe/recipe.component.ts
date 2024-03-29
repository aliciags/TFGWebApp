import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';
import { Recipe } from '../../../core/model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [ LocalStorageService ]
})
export class RecipeComponent implements OnInit {

  public recipe: Recipe;
  public loggedIn: boolean;
  public editable: boolean;
  public modalText: string;
  public showModal: boolean;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor(private router: Router,
              private localStorage: LocalStorageService,
              private apiService: ApiService) {
    this.loggedIn = false;
    this.editable = false;
    this.showModal = false;
    this.modalText = '';
    this.recipe = {
      _id: '',
      name: '',
      timing: 1,
      guest: 1,
      meal: [],
      diet: '',
      ingredients: [],
      steps: [],
      image: '',
      creator: ''
    };
  }

  ngOnInit(): void {
    this.apiService.get('/recipe/' + history.state.id)
    .subscribe(response => {
      this.recipe = response;
      if (this.localStorage.get('email') === this.recipe.creator ) {
        this.editable = true;
      }
    },
    error => {
      if (error.message === 'recipe not found'){
        this.router.navigate(['/notfound']);
      } else {
        console.log('Internal server error');
      }
    });
    if (this.localStorage.get('token') != null) {
      this.loggedIn = true;
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
    }
  }

  onAdd(ingredient: string): void {
    const body = {
      action: 'add'
    };
    this.apiService.put('/user/ingredient/' + this.localStorage.get('email') + '&' + ingredient, body, this.httpOptions)
      .subscribe(response => {
        console.log(ingredient, 'added to the groceries');
        this.modalText = 'added to the groceries';
      },
      error => {
        if (error.message === 'user not found'){
          this.router.navigate(['/notfound']);
        } else if (error.message === 'ingredient not found'){
          console.log('no such ingredient');
          this.modalText = 'no such ingredient';
        } else if (error.message === 'ingredient already in the list'){
          console.log('already in the list');
          this.modalText = 'already in the list';
        } else {
          console.log('Internal server error');
          this.modalText = 'internal server error';
        }
      });
    this.showModal = true;
  }

  onEdit(id: string): void{
    this.router.navigateByUrl('/recipe/recipe-form', {state: {id}});
  }
}
