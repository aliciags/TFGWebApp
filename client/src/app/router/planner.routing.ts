import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealFormComponent } from '../pages/planner/meal-form/meal-form.component';
import { MenuFormComponent } from '../pages/planner/menu-form/menu-form.component';
import { PlannerFormComponent } from '../pages/planner/planner-form/planner-form.component';
import { PlannerComponent } from '../pages/planner/planner/planner.component';

const plannerRoutes: Routes = [
    {path: 'planner', component: PlannerComponent},
    {path: 'planner/planner-form', component: PlannerFormComponent},
    {path: 'planner/meal-form', component: MealFormComponent},
    {path: 'planner/menu-form', component: MenuFormComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(plannerRoutes)
    ],
    exports: [RouterModule]
})

export class PlannerRoutingModule { }
