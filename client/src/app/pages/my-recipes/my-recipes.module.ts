import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MyRecipesComponent } from './my-recipes.component';
import { DisplayRecipesComponent } from 'src/app/components/display-recipes/display-recipes.component';
import { MyRecipesRoutingModule } from 'src/app/router/my-recipes.routing';

@NgModule({
    declarations: [
        MyRecipesComponent,
        DisplayRecipesComponent
    ],
    exports: [ DisplayRecipesComponent ],
    imports: [
        CommonModule,
        MyRecipesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule
    ],
    providers: [ ]
})

export class MyRecipesModule { }
