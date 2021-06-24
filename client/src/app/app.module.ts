import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ApiService } from './core/service/api.service';
import { UserModule } from './components/user/user.module';
import { UserFormModule } from './components/user/user-form/user-form.module';
import { PlannerModule } from './components/planner/planner.module';
import { RecipeModule } from './pages/recipe/recipe/recipe.module';
import { ExpenseModule } from './pages/expenses/expenses-tracker/expense-tacker.module';
import { GroceriesListModule } from './pages/groceries-list/groceries-list.module';
import { WildcardRoutingModule } from './components/not-found/not-found.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LocalStorageService } from './core/service/local-storage.service';
import { DatePipe } from '@angular/common';
import { DisplayRecipesComponent } from './components/display-recipes/display-recipes.component';
import { MyRecipesComponent } from './pages/my-recipes/my-recipes.component';
import { FilterPipe } from './core/filter/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainNavComponent,
    DisplayRecipesComponent,
    MyRecipesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,

    UserModule,
    UserFormModule,
    RecipeModule,
    PlannerModule,
    ExpenseModule,
    GroceriesListModule,
    WildcardRoutingModule // always last module to check first other child routes
  ],
  providers: [ApiService, LocalStorageService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
