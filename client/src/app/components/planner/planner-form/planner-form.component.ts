import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: [/*'./planner-form.component.css'*/],
  providers: [ ApiService, LocalStorageService ]
})
export class PlannerFormComponent implements OnInit {

  public plannerForm: FormGroup;
  public submitted: boolean = false;
  public meals: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  public diets: string[] = ['Omnivorous', 'Vegetarian', 'Vegan'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private localStorage: LocalStorageService
  ) {
    this.plannerForm = this.fb.group({
      nMeals: ['', [Validators.required]],
      meal: ['', [Validators.required]],
      diet: this.fb.group({
        omnivorous: [''],
        vegetarian: [''],
        vegan: ['']
      })
    });
  }

  ngOnInit(): void {  }

  onSubmit(): void{
    if (this.plannerForm.valid){
      console.log(this.plannerForm.value['diet']);
      const user: User = {
        email: history.state.email,
        password: history.state.password,
        firstname: history.state.user.firstname,
        lastname: history.state.user.lastname,
        birthyear: history.state.user.birthyear,
        numberMeals: this.plannerForm.value['nMeals'],
        meals: this.plannerForm.value['meal'],
        diet: 'Omnivorous',
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
