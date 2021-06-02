import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  public recipes: Recipe[];
  public filters: boolean;
  public environment: string;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor( private router: Router,
               private apiService: ApiService,
               private localStorage: LocalStorageService ) {
    this.recipes = [];
    this.environment = 'myrecipes';
    this.filters = false;
  }

  ngOnInit(): void {
    if (this.localStorage.get('token') == null) {
      this.router.navigate(['/login']);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
      this.apiService.get('/recipe/book/' + this.localStorage.get('email'), this.httpOptions).subscribe(response => {
        this.recipes = response;
      },
      err => {
        console.log(err);
      });
    }
  }

  onDelete(rid: string): void{
    this.apiService.delete('/recipe/' + rid + '&' + this.localStorage.get('email'), this.httpOptions)
      .subscribe(response => {
        console.log(response);
        if (response.msg === 'recipe removed'){
          this.ngOnInit();
        }
      }, error => {
        console.log(error);
      });
  }

  onFilter(): void {
    this.filters ? this.filters = false : this.filters = true;
  }

}
