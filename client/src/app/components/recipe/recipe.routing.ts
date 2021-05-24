import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeComponent } from './recipe.component';

const recipeRoutes: Routes = [
    {path:'recipe', component: RecipeComponent},
    {path:'recipe/recipe-form', component: RecipeFormComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [RouterModule]
})

export class RecipeRoutingModule { }