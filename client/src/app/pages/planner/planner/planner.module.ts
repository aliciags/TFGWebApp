import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { PlannerComponent } from './planner.component';
import { PlannerRoutingModule } from '../../../router/planner.routing';
import { MealFormComponent } from '../meal-form/meal-form.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';
import { MenuFormComponent } from '../menu-form/menu-form.component';
import { MenuComponent } from '../menu/menu.component';


@NgModule({
    declarations: [
        PlannerComponent,
        MealFormComponent,
        MenuFormComponent,
        MenuComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PlannerRoutingModule,
        MatCardModule,
        MatListModule,
        MatGridListModule,
        MatMenuModule,
        MatIconModule
    ],
    providers: [ LocalStorageService ]
})

export class PlannerModule { }
