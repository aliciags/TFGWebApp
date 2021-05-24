import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesTrackerComponent } from './components/expenses-tracker/expenses-tracker.component';
import { GroceriesListComponent } from './components/groceries-list/groceries-list.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'groceries', component: GroceriesListComponent},
  {path:'expenses', component: ExpensesTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
