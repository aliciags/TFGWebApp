import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesTrackerComponent } from './expenses-tracker.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

const expensesRoutes: Routes = [
    {path: 'expenses', component: ExpensesTrackerComponent},
    {path: 'expenses/expense-form', component: ExpenseFormComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(expensesRoutes)
    ],
    exports: [RouterModule]
})

export class ExpensesRoutingModule { }
