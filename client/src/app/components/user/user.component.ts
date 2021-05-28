import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ ApiService ]
})
export class UserComponent implements OnInit {

  public user: User;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor( private apiService: ApiService,
               private router: Router,
               private localStorage: LocalStorageService) {
    this.user = {
      firstname: '', lastname: '', email: '', birthyear: 1, diet: '',
      numberMeals: 1, meals: [], recipes: [], groceries: []
    };
  }

  ngOnInit(): void {
    if (this.localStorage.get('token') == null){
      this.router.navigate(['/login']);
    }else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
      this.apiService.get('/user/' + this.localStorage.get('email'), this.httpOptions)
      .subscribe(response => {
        this.user = response;
      },
      error => {
        if (error.error.msg === 'user not found'){
          this.router.navigate(['/notfound']);
        } else {
          console.log('Internal server error');
        }
      });
    }
  }

}
