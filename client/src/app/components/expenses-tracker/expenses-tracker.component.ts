import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Expense } from '../../model/expense';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-expenses-tracker',
  templateUrl: './expenses-tracker.component.html',
  styleUrls: ['./expenses-tracker.component.css'],
  providers: [LocalStorageService, ApiService, DatePipe],
})
export class ExpensesTrackerComponent implements OnInit {

  public expenses: Expense[];
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token',
    }),
  };

  constructor(
    private router: Router,
    private apiService: ApiService,
    private localStorage: LocalStorageService,
    public datepipe: DatePipe
  ) {
    this.expenses = [];
  }

  ngOnInit(): void {
    if (this.localStorage.get('token') == null) {
      this.router.navigate(['/login']);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set(
        'x-auth-token',
        this.localStorage.get('token')
      );
      this.apiService
        .get(
          '/expense/user/' + this.localStorage.get('email'),
          this.httpOptions
        )
        .subscribe(
          (response) => {
            this.expenses = response;
            this.expenses = this.transformDate(this.expenses);
          },
          (error) => {
            if (error.status === 401 ){
              this.router.navigateByUrl('/login', {state: {msg: 'Unauthorized'}});
            } else if (error.message === 'There are no expenses for such user') {
              this.router.navigate(['/notfound']);
            } else {
              console.log('Internal server error');
            }
          }
        );
    }
  }

  onEdit(id: string | undefined): void{
    this.router.navigateByUrl('/expenses/expense-form', {state: {id}});
  }

  onDelete(id: string | null): void {
    if (id) {
      this.apiService.delete('/expense/' + id, this.httpOptions).subscribe(
        (response) => {
          if (response.msg === 'expense removed') {
            this.ngOnInit();
          }
        },
        (error) => {
          if (error.message === 'Expense does not exist') {
            this.router.navigate(['/notfound']);
          } else {
            console.log('Internal server error');
          }
        }
      );
    }
  }

  transformDate(expenses: Expense[]): Expense[] {
    expenses.forEach((e) => {
      const date = this.datepipe.transform(e.date, 'dd-MM-yyyy');
      if (date != null) {
        e.date = date;
      }
    });
    return expenses;
  }
}
