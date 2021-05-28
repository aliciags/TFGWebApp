import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { RecipeComponent } from './recipe.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeRoutingModule } from './recipe.routing';


@NgModule({
    declarations: [
        RecipeComponent,
        RecipeFormComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        RecipeRoutingModule
    ],
    providers: []
})

export class RecipeModule { }
