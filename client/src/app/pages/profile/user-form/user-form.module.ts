import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { UserFormRoutingModule } from '../../../router/user-form.routing';
import { PlannerFormComponent } from '../../planner/planner-form/planner-form.component';
import { UserFormService } from './user-form.service';
import { SelectableButtonComponent } from 'src/app/components/selectable-button/selectable-button.component';
import { ApiService } from 'src/app/core/service/api.service';

@NgModule({
    declarations: [
        UserFormComponent,
        SignInFormComponent,
        PlannerFormComponent,
        SelectableButtonComponent,
    ],
    exports: [ SelectableButtonComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserFormRoutingModule
    ],
    providers: [ UserFormService, ApiService ]
})

export class UserFormModule { }
