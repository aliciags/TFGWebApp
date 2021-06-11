import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExpensesRoutingModule } from './expense-tracker.routing';

import { ExpensesTrackerComponent } from './expenses-tracker.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';


@NgModule({
    declarations: [
        ExpensesTrackerComponent,
        ExpenseFormComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        ExpensesRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ ]
})

export class ExpenseModule { }
