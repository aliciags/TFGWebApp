import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
  providers: [ LocalStorageService ]
})
export class GroceriesListComponent implements OnInit {

  public ing = 'ingredient';
  public ingredientsList: string[];
  public ingredientsBought: string[];
  public showModal: boolean;
  public ingredientForm: FormGroup;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor( private router: Router,
               private fb: FormBuilder,
               private localStorage: LocalStorageService,
               private apiService: ApiService,
               private dialog: MatDialog) {
      this.ingredientsList = [];
      this.ingredientsBought = [];
      this.showModal = false;
      this.ingredientForm = this.fb.group({
        ingredient: ['']
      });
      this.ingredientForm.controls[this.ing].setErrors({
        alreadyInList: false,
        notExists: false
      });
   }

  ngOnInit(): void {
    if (this.localStorage.get('token') == null){
      this.router.navigate(['/login']);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
      this.apiService.get('/user/' + this.localStorage.get('email'), this.httpOptions)
      .subscribe(response => {
        this.ingredientsList = response.groceries;
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

  onAdd(ingredient: string): void {
    const body = {
      action: 'add'
    };
    this.apiService.put('/user/ingredient/' + this.localStorage.get('email') + '&' + ingredient, body, this.httpOptions)
    .subscribe(response => {
        this.ingredientsList = response.groceries;
      },
      error => {
        if (error.error.msg === 'user not found'){
          this.router.navigate(['/notfound']);
        } else if (error.error.msg === 'ingredient not found'){
          console.log('no such ingredient');
          this.ingredientForm.controls[this.ing].setErrors({
            notExists: true
          });
        } else if (error.error.msg === 'ingredient already in the list'){
          console.log('already in the list');
          this.ingredientForm.controls[this.ing].setErrors({
            alreadyInList: true
          });
        } else {
          console.log('Internal server error');
        }
      });
    }

  onBought(ingredient: string): void {
    // look for the ingredient in the list
    const ing = this.ingredientsList.filter(x => x === ingredient)[0];
    // then looks for the index of that element
    const index = this.ingredientsList.indexOf(ing, 0);
    if ( index > -1){
      // removes an element from the position index
      this.ingredientsList.splice(index, 1);
    }
    this.ingredientsBought.push(ingredient);
    this.onDelete(ingredient);
  }

  onNotBought(ingredient: string): void{
    // look for the ingredient in the list
    const ing = this.ingredientsBought.filter(x => x === ingredient)[0];
    // then looks for the index of that element
    const index = this.ingredientsBought.indexOf(ing, 0);
    if ( index > -1){
      // removes an element from the position index
      this.ingredientsBought.splice(index, 1);
    }
    this.onAdd(ingredient);
  }

  onDelete(ingredient: string): void {
    const body = {
      action: 'delete'
    };
    this.apiService.put('/user/ingredient/' + this.localStorage.get('email') + '&' + ingredient, body, this.httpOptions)
    .subscribe(response => {
      this.ingredientsList = response.groceries;
    },
    error => {
      if (error.error.msg === 'user not found'){
        this.router.navigate(['/notfound']);
      } else if (error.error.msg === 'ingredient not found'){
        this.router.navigate(['/notfound']);
      }else {
        console.log('Internal server error');
      }
    });
  }

  onShow(): void{
    this.showModal = true;
  }

  onSubmit(): void{
    const body = {
      _user: this.localStorage.get('email'),
      ingredients: this.ingredientsBought,
      expense: 50
    };
    this.apiService.post('/expense', body, this.httpOptions)
    .subscribe(response => {
      this.ingredientsBought = [];
    },
    error => {
      console.log('Internal server error');
    });
    this.apiService.get('/user/' + this.localStorage.get('email'), this.httpOptions)
      .subscribe(response => {
        this.ingredientsList = response.groceries;
      },
      error => {
        if (error.error.msg === 'user not found'){
          this.router.navigate(['/notfound']);
        } else {
          console.log('Internal server error');
        }
      });
    this.showModal = false;
  }

}
