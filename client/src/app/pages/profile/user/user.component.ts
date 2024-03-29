import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { ApiService } from 'src/app/core/service/api.service';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';

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
               private localStorage: LocalStorageService) {  }

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
        if (error.status === 401 ){
          this.router.navigateByUrl('/login', {state: {msg: 'Unauthorized'}});
        } else if (error.message === 'user not found'){
          this.router.navigate(['/notfound']);
        } else {
          console.log('Internal server error');
        }
      });
    }
  }

  onEdit(userId: string): void{
    this.router.navigate(['user/edit-user'], {state: {id: this.user.email}});
  }

}
