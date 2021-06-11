import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  public expenseForm: FormGroup;
  public expenseId: string;

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      ingredients: ['', []],
      expense: ['', []]
    });
    this.expenseId = '';
   }

  ngOnInit(): void {
    this.expenseId = history.state.id;
  }

  onSubmit(): void{

  }

}
