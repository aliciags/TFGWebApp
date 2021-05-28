import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  public mealForm: FormGroup;
  public submitted: boolean = false;
  public title: string = 'Add a meal';
  public days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public meals: string[] = ['Breakfast', 'Lunch', 'Diner', 'Snack'];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.mealForm = this.fb.group({
      day: ['', [Validators.required]],
      meal: ['', [Validators.required]],
      recipe: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

}
