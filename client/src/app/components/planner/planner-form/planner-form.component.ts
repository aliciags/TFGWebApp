import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public meals: string[] = ['Breakfast', 'Lunch', 'Diner', 'Snack'];
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
    })
  }

  public ngOnInit(): void {  }

  public async onSubmit(){
    if(this.plannerForm.valid){
      console.log(this.plannerForm.value["diet"]);
      let body = {
        email: history.state.email,
        password: history.state.password,
        firstname: history.state.user.firstname,
        lastname: history.state.user.lastname,
        birthyear: history.state.user.birthyear,
        numberMeals: this.plannerForm.value["nMeals"],
        meals: this.plannerForm.value["meal"],
        diet: "Omnivorous"
      }
      
      this.apiService.post("/user", body).subscribe(response => {
        this.localStorage.set("token", response.token);
        this.localStorage.set("email", body.email);
        this.router.navigateByUrl("/");
      },
      error => {
        console.log(error)
      });
    }
    
  }

}
