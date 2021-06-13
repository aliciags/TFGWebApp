import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  public expenseForm: FormGroup;
  public expenseId: string;
  public expense: Expense;
  public ingredientsBought: string[];
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token',
    }),
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private apiService: ApiService,
              private localStorage: LocalStorageService) {
    this.expenseForm = this.fb.group({
      date: ['', [Validators.required]],
      ingredients: ['', []],
      expense: ['', [Validators.required]]
    });
    this.expenseId = '';
    this.ingredientsBought = [];
    this.expense = {
      date: '',
      ingredients: [],
      expense: 0
    };
   }

  ngOnInit(): void {
    this.expenseId = history.state.id;
    this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
    if (this.expenseId != null) {
      this.apiService.get('/expense/' + this.expenseId, this.httpOptions)
        .subscribe(response => {
          this.expense = response;
          this.ingredientsBought = this.expense.ingredients;
        }, error => {
          if (error.message === 'Expense not found'){
            console.log('Expense does not exists');
          }
        });
    }
  }

  onAddIngredient(ingredient: string): void{
    const ingredients = 'ingredients';
    this.apiService.get('/ingredient/' + ingredient)
    .subscribe(response => {
        const ing = this.ingredientsBought.filter( x => x === response.name)[0];
        if (this.ingredientsBought.indexOf(ing, 0) > -1 ){
          this.expenseForm.controls[ingredients].setErrors({
            alreadyInList: true
          });
        } else {
          this.ingredientsBought.push(response.name);
        }
      },
      error => {
        if (error.message === 'Ingredient not found'){
          this.expenseForm.controls[ingredients].setErrors({
            notExists: true
          });
        } else {
          console.log('Internal server error');
        }
      });
  }

  onDeleteIngredient(ingredient: string): void{
    const ing = this.ingredientsBought.filter(x => x === ingredient)[0];
    const index = this.ingredientsBought.indexOf(ing, 0);
    if (index > -1 ){
      this.ingredientsBought.splice(index, 1);
    } else {
      console.log('No such ingredient in the list');
    }
  }

  onSubmit(): void{
    if ( this.expenseForm.valid ){
      const body = {
        _user: this.localStorage.get('email'),
        date: this.expenseForm.value['date'],
        ingredients: this.ingredientsBought,
        expense: this.expenseForm.value['expense'],
      };
      if (this.expenseId != null) {
        this.apiService.put('/expense/' + this.expenseId, body, this.httpOptions )
          .subscribe(response => {
            this.ingredientsBought = [];
            this.router.navigate(['/expenses']);
          }, error => {
            console.log(error.error);
          });
      } else {
        this.apiService.post('/expense', body, this.httpOptions)
        .subscribe(response => {
          this.ingredientsBought = [];
          this.router.navigate(['/expenses']);
        },
        error => {
          console.log(error.error);
        });
      }
    }
  }

}
