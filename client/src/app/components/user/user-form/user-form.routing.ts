import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerFormComponent } from '../../planner/planner-form/planner-form.component';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { SignInService } from '../sign-in-form/sign-in-form.service';
import { UserFormComponent } from './user-form.component';

const userFormRoutes: Routes =  [
    {path: 'login/signin', component: SignInFormComponent },
    {path: 'login/signin/user', component: UserFormComponent, data: UserFormComponent},
    {path: 'login/signin/user/planner', component: PlannerFormComponent}
]


@NgModule({
    imports: [
        RouterModule.forChild(userFormRoutes)
    ],
    exports: [RouterModule]
})

export class UserFormRoutingModule { }