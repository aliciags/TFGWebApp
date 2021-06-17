import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public editUserFrom: FormGroup;
  public userId: string;
  public user: User;
  public meals: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  public diets: string[] = ['Omnivorous', 'Vegetarian', 'Vegan'];
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token',
    }),
  };

  constructor( private router: Router,
               private localStorage: LocalStorageService,
               private apiService: ApiService ) {
   }

  ngOnInit(): void {
    this.httpOptions.headers = this.httpOptions.headers.set(
      'x-auth-token',
      this.localStorage.get('token')
    );
    this.apiService.get('/user/' + history.state.id, this.httpOptions)
      .subscribe(response => {
        this.user = response;
        console.log(this.user);
      }, error => {
        console.log(error);
      });
  }

  onSubmit(): void {
    this.apiService.put('/user/' + this.user.email, this.user, this.httpOptions)
      .subscribe(response => {
        this.router.navigate(['user']);
      }, error => {
        if ( error.message === 'user not registered'){
          this.router.navigate(['not-found']);
        }
        console.log(error);
      });
  }

}
