import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MyRecipesComponent } from './my-recipes.component';
import { MyRecipesRoutingModule } from 'src/app/router/my-recipes.routing';

@NgModule({
    declarations: [
        MyRecipesComponent
    ],
    exports: [],
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
