import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  providers: [ LocalStorageService, ApiService ]
})
export class RecipeFormComponent implements OnInit {

  public recipeForm: FormGroup;
  public submitted: boolean = false;
  public title: string = 'New recipe'
  public meals: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  public diets: string[] = ['Omnivorous', 'Vegetarian', 'Vegan'];
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token' 
    })
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorage: LocalStorageService,
    private apiService: ApiService
  ) { 
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required]],
      timing: ['', [Validators.required]],
      dinnerGuest: ['', [Validators.required]],  //number of portions, eaters
      meal: ['', [Validators.required]],    //breakfast, lunch, diner, snack
      diet: ['', [Validators.required]],    //omnivor, vegetrian, vegan
      ingredients: ['', [Validators.required]],
      steps: ['', [Validators.required]],
      image: ['', ],
      videoRecipe: ['', ]
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    if(this.recipeForm.valid){
      let recipe: Recipe = {
        name: this.recipeForm.value["name"],
        timing: this.recipeForm.value["timing"],
        guest: this.recipeForm.value["dinnerGuest"],
        meal: this.recipeForm.value["meal"],
        diet: this.recipeForm.value["diet"],
        ingredients: this.recipeForm.value["ingredients"],
        steps: this.recipeForm.value["steps"],
        image: this.recipeForm.value["image"],
        videoRecipe: this.recipeForm.value["videoRecipe"],
        creator: this.localStorage.get("email")
      }
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get("token"));
      this.apiService.post("/recipe", recipe, this.httpOptions).subscribe(response => {
        console.log(response);
        this.router.navigate(["/"]);
      }, 
      error => {
        console.log(error);
      });   
    }else{
      console.log("there is an error")
    }
  }
}
