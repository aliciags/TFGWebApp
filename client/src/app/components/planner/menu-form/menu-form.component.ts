import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
  providers: [ ApiService, LocalStorageService ]
})
export class MenuFormComponent implements OnInit {

  public menuForm: FormGroup;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private localStorage: LocalStorageService
  ) {
    this.menuForm = this.fb.group({
      title: ['', []],
      description: ['', []]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const body = {
      _user: this.localStorage.get('email'),
      title: this.menuForm.value['title'],
      description: this.menuForm.value['description']
    };
    this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
    this.apiService.post('/menu', body, this.httpOptions)
      .subscribe( response => {
        this.router.navigate(['planner']);
      }, error => {
        console.log('no such user');
      });
  }

}