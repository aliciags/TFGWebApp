import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { ApiService } from 'src/app/core/service/api.service';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.css'],
  providers: [ ApiService, LocalStorageService ]
})
export class PlannerFormComponent implements OnInit {

  public plannerForm: FormGroup;
  public meals: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  public diets: string[] = ['Omnivorous', 'Vegetarian', 'Vegan'];
  public meal: string[];

  constructor( private fb: FormBuilder,
               private router: Router,
               private apiService: ApiService,
               private localStorage: LocalStorageService
  ) {
    this.plannerForm = this.fb.group({
      diet: ['', Validators.required]
    });
    this.meal = [];
  }

  ngOnInit(): void {  }

  onClick(str: string): void{

    if ( this.meals.indexOf(str.trim(), 0) > -1) {
      if ( this.meal.indexOf(str, 0) > -1 ) {
        this.meal.splice(this.meal.indexOf(str, 0), 1);
      } else {
        this.meal.push(str);
      }
      console.log(this.meal);
    }
  }

  onSubmit(): void{
    if (this.plannerForm.valid){
      const user: User = {
        email: history.state.email,
        password: history.state.password,
        firstname: history.state.user.firstname,
        lastname: history.state.user.lastname,
        birthyear: history.state.user.birthyear,
        meals: this.meal,
        diet: this.plannerForm.value['diet'],
        recipes: [],
        groceries: []
      };
      this.apiService.post('/user', user).subscribe(response => {
        this.localStorage.set('token', response.token);
        this.localStorage.set('email', user.email);
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
      });
    }
  }
}
