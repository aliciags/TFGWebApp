import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public recipeForm: FormGroup;
  public submitted: boolean = false;
  public title: string = 'New recipe'
  public meals: string[] = ['Breakfast', 'Lunch', 'Diner', 'Snack'];
  public diets: string[] = ['Omnivorous', 'Vegetarian', 'Vegan'];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required]],
      timing: ['', [Validators.required]],
      dinnerGuest: ['', [Validators.required]],  //number of portions, eaters
      meal: ['', [Validators.required]],    //breakfast, lunch, diner, snack
      diet: ['', [Validators.required]],    //omnivor, vegetrian, vegan
      ingredients: ['', [Validators.required]],
      steps: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      videoRecipe: ['', ]
    })
  }

  ngOnInit(): void {
  }

}
