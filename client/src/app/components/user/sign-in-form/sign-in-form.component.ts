import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SignInService } from './sign-in-form.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
  providers: [ ApiService ]
})

export class SignInFormComponent implements OnInit {

  public signInForm: FormGroup;
  public submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private signInService: SignInService,
    private apiService: ApiService
  ) { 
    this.submitted = false;
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$')]],
      passwordConf: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.signIn().then(response => {
      if (response.msg){
        console.log('user already exists');
        this.signInForm.controls['email'].setErrors({
        alreadyExists: true
      });
      }else {
        if (this.signInForm.valid){
          this.router.navigateByUrl('login/signin/user', {state: this.signInForm.value});
        }
      }
    }, error => {
      console.log('internal server error', error);
    });
  }

  signIn(): Promise<any>{
    const res = this.apiService.get('/user/exists/' + this.signInForm.value['email']).toPromise();
    const result = this.signInService.signIn(this.signInForm.controls['password'].value,
    this.signInForm.controls['passwordConf'].value);
    if (!result){
      this.signInForm.controls['passwordConf'].setErrors({
        invalidSignIn: true
      });
    }
    return res;
  }
}
