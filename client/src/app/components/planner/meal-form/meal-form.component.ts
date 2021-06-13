import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  public mealForm: FormGroup;
  public mid: string;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };
  public recipes: {
    name: string;
    _id: string;
  }[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorage: LocalStorageService,
    private apiService: ApiService
  ) {
    this.mealForm = this.fb.group({
      recipe: ['', [Validators.required]]
    });
    this.mid = '';
    this.recipes = [];
  }

  ngOnInit(): void {
    this.mid = history.state.id;
    this.recipes = history.state.recipes;
    this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
  }

  addRecipe(recipe: string): void{
    const r = {
      name: recipe,
      _id: ''
    };
    console.log('name:', recipe);
    this.apiService.post('/filter', {name: recipe, user: this.localStorage.get('email')})
      .subscribe( response => {
        // console.log('r', response);
        console.log(response[0]._id);
        const body = {
          recipe: response[0]._id,
          edit: 'add'
        };
        r._id = response[0]._id;
        this.apiService.put('/day/meal/' + this.mid, body, this.httpOptions)
          .subscribe(value => {
            console.log('added');
            this.recipes.push(r);
        });
      }, error => {
        console.log(error);
      });
  }

  deleteRecipe(rid: string): void{
    const body = {
      recipe: rid,
      edit: 'delete'
    };
    this.apiService.put('/day/meal/' + this.mid, body, this.httpOptions)
      .subscribe(response => {
        const recipe = this.recipes.filter(x => x._id === rid)[0];
        if (this.recipes.indexOf(recipe, 0) > -1) {
          this.recipes.splice(this.recipes.indexOf(recipe, 0), 1);
        }
    });
  }

  close(): void{
    this.router.navigate(['planner']);
  }

}
