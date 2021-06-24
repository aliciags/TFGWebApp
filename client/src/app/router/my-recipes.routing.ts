import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRecipesComponent } from '../pages/my-recipes/my-recipes.component';
import { RecipeFormComponent } from '../pages/recipe/recipe-form/recipe-form.component';

const myRecipesRoutes: Routes = [
    {path: 'my-recipes', component: MyRecipesComponent},
    {path: 'my-recipes/recipe-form', component: RecipeFormComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(myRecipesRoutes)
    ],
    exports: [RouterModule]
})

export class MyRecipesRoutingModule { }
