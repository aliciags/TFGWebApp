import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Expense } from '../../model/expense';

@Component({
  selector: 'app-expenses-tracker',
  templateUrl: './expenses-tracker.component.html',
  styleUrls: ['./expenses-tracker.component.css'],
  providers: [ LocalStorageService, ApiService ]
})
export class ExpensesTrackerComponent implements OnInit {

  /*public expense: Expense = {
    date: new Date().toUTCString(),
    ingredientsList: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
    expense: 50
  };*/
  public expenses: Expense[];
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token' 
    })
  };
  
  constructor(private router: Router,
    private apiService: ApiService,
    private localStorage: LocalStorageService) {
      this.expenses = [];
  }

  ngOnInit(): void {
    if(this.localStorage.get("token") == null){
      this.router.navigate(["/login"]);
    }else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get("token"));
      this.apiService.get("/expense/user/"+this.localStorage.get("email"), this.httpOptions)
      .subscribe(response => {
        this.expenses = response;
      },
      error => {
        if(error.error.msg === "There are no expenses for such user"){ 
          this.router.navigate(["/notfound"]);
        } else {
          console.log("Internal server error");
        }
      });
    }
  }

}
