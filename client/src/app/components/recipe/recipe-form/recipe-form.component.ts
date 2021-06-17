import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Recipe } from 'src/app/model/recipe';
import recipeIngredient from 'src/app/model/recipe-ingredient';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  providers: [LocalStorageService, ApiService],
})

export class RecipeFormComponent implements OnInit {

  public recipeForm: FormGroup;
  public recipe: Recipe;
  public ingredients: recipeIngredient[];
  public steps: string[];
  public selectedFile: File | null;
  public meals: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  public diets: string[] = ['Omnivorous', 'Vegetarian', 'Vegan'];
  public units: string[] = ['unit', 'g', 'kg', 'ml', 'cl', 'L', 'tsp', 'tbps'];
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token',
    }),
  };

  constructor( private fb: FormBuilder,
               private router: Router,
               private localStorage: LocalStorageService,
               private apiService: ApiService ) {
    this.ingredients = [];
    this.steps = [];
    this.selectedFile = null;
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required]],
      timing: ['', ],
      dinnerGuest: ['', ],                      // number of portions, eaters
      meal: ['', ],                             // breakfast, lunch, diner, snack
      diet: ['', [Validators.required]],        // omnivor, vegetrian, vegan
      ingredients: this.fb.group({
        quantity: ['', [Validators.required]],
        unit: ['', [Validators.required]],
        ingredient: ['', [Validators.required]]
      }),
      steps: ['', [Validators.required]],
      image: [''],
      videoRecipe: [''],
    });
    this.recipe = {
      _id: '',
      name: '',
      timing: 0,
      guest: 0,
      meal: [],
      diet: '',
      ingredients: [],
      steps: [],
      image: '',
      videoRecipe: '',
      creator: this.localStorage.get('email'),
    };
  }

  ngOnInit(): void {
    this.httpOptions.headers = this.httpOptions.headers.set(
      'x-auth-token',
      this.localStorage.get('token')
      );
    if (history.state.id != null) {
      this.apiService.get('/recipe/' + history.state.id, this.httpOptions )
        .subscribe( response => {
          this.recipe = response;
          this.ingredients = this.recipe.ingredients;
          this.steps = this.recipe.steps;
        }, error => {
          console.log(error);
        });
    }
  }

  onSubmit(): void {
    console.log(this.recipe);
    if (this.recipeForm.valid) {
      const recipe = new FormData();
      recipe.append('image', this.selectedFile, this.selectedFile.name);
      const r = JSON.stringify( {
          _id: '',
          name: this.recipeForm.value['name'],
          timing: this.recipeForm.value['timing'],
          guest: this.recipeForm.value['dinnerGuest'],
          meal: this.recipeForm.value['meal'],
          diet: this.recipeForm.value['diet'],
          ingredients: this.ingredients,
          steps: this.steps,
          image: '',
          videoRecipe: this.recipeForm.value['videoRecipe'],
          creator: this.localStorage.get('email'),
        }
      );
      recipe.append('data', r);
      if (this.recipe._id !== '') {
        this.apiService.put('/recipe/' + this.recipe._id, recipe, this.httpOptions).subscribe(
          (response) => {
            console.log(response);
            this.router.navigate(['/my-recipes']);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log(recipe);
        this.apiService.post('/recipe', recipe, this.httpOptions).subscribe(
          (response) => {
            console.log(response);
            this.router.navigate(['/my-recipes']);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      console.log('there is an error');
      console.log(this.recipeForm.errors);
    }
  }

  onFileSelected(event: Event ): void{
    const target = event.target as HTMLInputElement;
    try {
      this.selectedFile = target.files[0];
    } catch (err) {
      console.log(err);
    }
  }

  onAddIngredient(q: string, u: string, ingredient: string): void {
    const ingredients = 'ingredients';
    this.apiService.get('/ingredient/' + ingredient).subscribe(
      (response) => {
        const ing = this.ingredients.filter((x) => x.ingredient === response.name)[0];
        if (this.ingredients.indexOf(ing, 0) > -1) {
          this.recipeForm.controls[ingredients].setErrors({
            alreadyInList: true,
          });
        } else {
          this.ingredients.push({
            quantity: q,
            unit: u,
            ingredient: response.name}
          );
        }
      },
      (error) => {
        if (error.message === 'Ingredient not found') {
          this.recipeForm.controls[ingredients].setErrors({
            notExists: true,
          });
        } else {
          console.log('Internal server error');
        }
      }
    );
  }

  onDeleteIngredient(ingredient: string): void {
    const ing = this.ingredients.filter((x) => x.ingredient === ingredient)[0];
    const index = this.ingredients.indexOf(ing, 0);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    } else {
      console.log('No such ingredient in the list');
    }
  }

  onAddStep(step: string): void{
    this.steps.push(step);
  }

  onDeleteStep(step: string): void{
    const ing = this.steps.filter((x) => x === step)[0];
    const index = this.steps.indexOf(ing, 0);
    if (index > -1) {
      this.steps.splice(index, 1);
    } else {
      console.log('No such ingredient in the list');
    }
  }
}
