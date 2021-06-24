import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { GroceriesListRoutingModule } from 'src/app/router/groceries-list.routing';
import { GroceriesListComponent } from './groceries-list.component';

@NgModule({
    declarations: [
        GroceriesListComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        GroceriesListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule
    ],
    providers: [ ]
})

export class GroceriesListModule { }
