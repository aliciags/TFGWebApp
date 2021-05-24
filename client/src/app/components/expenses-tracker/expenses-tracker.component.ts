import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Expense } from '../../model/expense';

@Component({
  selector: 'app-expenses-tracker',
  templateUrl: './expenses-tracker.component.html',
  styleUrls: ['./expenses-tracker.component.css'],
  providers: [ LocalStorageService ]
})
export class ExpensesTrackerComponent implements OnInit {

  public expense: Expense = {
    date: new Date().toUTCString(),
    ingredientsList: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
    expense: 50
  }
  public expenses: Expense[] = [this.expense, this.expense, this.expense]

  constructor(private router: Router,
    private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    if(this.localStorage.get("token") == null){
      this.router.navigate(["/login"]);
    }
  }

}
