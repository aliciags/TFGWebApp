import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RecipeComponent } from './recipe.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RecipeRoutingModule } from '../../../router/recipe.routing';
import { UserFormModule } from '../../profile/user-form/user-form.module';

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
        MatCardModule,
        UserFormModule,
        RecipeRoutingModule
    ],
    providers: []
})

export class RecipeModule { }
