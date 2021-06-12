import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LocalStorageService ]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loggedIn: boolean;
  private token: string;

  public constructor(private fb: FormBuilder,
                     private router: Router,
                     private apiService: ApiService,
                     private localStorageService: LocalStorageService){
      this.token = '';
      this.loggedIn = false;
      this.loginForm = this.fb.group({
          // The first parameter in a FormControl is optional, is the default value we give to the control
          // The second parameter provides a set of validators such as required, minlength, maxlength ...
          email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
          password: ['', [Validators.required ]]
      });

  }

  ngOnInit(): void {
    this.localStorageService.get('token') != null ? this.loggedIn = true : this.loggedIn = false;
  }

  onSumbit(): void{
    this.login().then(response => {
      // console.log(response);
      const email = 'email';
      this.token = response.token;
      if (this.loginForm.valid){
        this.localStorageService.set('token', this.token);
        this.localStorageService.set('email', this.loginForm.value[email]);
        this.router.navigateByUrl('/', {state: response});
      }
    },
    error => {
      if (error.message === 'Invalid Credentials'){
        // console.log(error)
        const password = 'password';
        this.loginForm.controls[password].setErrors({
          invalidLogin: true
        });
      }
    });
    // console.log(this.loginForm.valid);
    /*if(this.loginForm.valid){
      this.router.navigateByUrl("/"/*, {state: response});
    }*/
  }

  login(): Promise<any>{
    // set an error if the user and password not match
    const email = 'email';
    const password = 'password';
    const body = {
      email: this.loginForm.value[email],
      password: this.loginForm.value[password]
    };
    return this.apiService.post('/auth', body).toPromise();
  }

  logout(): void{
    this.localStorageService.remove('token');
    this.localStorageService.remove('email');
  }

  /*async login(){
    let result = null;
    let body = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password']
    }
    try{
      result = await this.apiService.post("/auth", body);

    } catch(err){
      console.log("Error", err)
      if(err.error.msg = "Invalid Credentials"){
        this.loginForm.controls['password'].setErrors({
          invalidLogin: true
        });
      }
    }
    return result;
  }*/

}
