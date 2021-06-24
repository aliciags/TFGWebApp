import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceriesListComponent } from '../pages/groceries-list/groceries-list.component';

const groceriesListRoutes: Routes = [
    {path: 'groceries', component: GroceriesListComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(groceriesListRoutes)
    ],
    exports: [RouterModule]
})

export class GroceriesListRoutingModule { }
