import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  //model firstname, lastname, email    
  public userForm: FormGroup;
  public submitted: boolean = false;
  public year: number = new Date().getFullYear();

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private usrFormService: UserFormService
    ) { 
      this.userForm = this.fb.group({
        //validate if firstname and lastname does not contain special chars
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        birthyear: ['', [Validators.required]] 
      });
    }

  public ngOnInit(): void {  }

  public onSubmit(){
    this.checkBirthYear();
    if(this.userForm.valid){
      let data = {
        email: history.state.email,
        password: history.state.password,
        user: this.userForm.value
      }
      this.router.navigateByUrl('login/signin/user/planner', {state: data});
    }
  }

  public checkBirthYear(){
    var result = this.usrFormService.checkValidYear(this.userForm.controls['birthyear'].value);
    if(!result){
      this.userForm.controls['birthyear'].setErrors({
        invalidYear: true
      });
    }
    
  }

}
