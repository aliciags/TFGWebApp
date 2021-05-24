import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealFormComponent } from './meal-form/meal-form.component';

import { PlannerFormComponent } from './planner-form/planner-form.component';
import { PlannerComponent } from './planner.component';

const plannerRoutes: Routes = [
    {path:'planner', component: PlannerComponent},
    {path:'planner/planner-form', component: PlannerFormComponent}, 
    {path:'planner/meal-form', component:MealFormComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(plannerRoutes)
    ],
    exports: [RouterModule]
})

export class PlannerRoutingModule { }