import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesListComponent } from './components/groceries-list/groceries-list.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { RecipeFormComponent } from './components/recipe/recipe-form/recipe-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'my-recipes', component: MyRecipesComponent},
  {path: 'my-recipes/recipe-form', component: RecipeFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'groceries', component: GroceriesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
