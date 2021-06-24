import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../pages/profile/user/user.component';
import { EditUserComponent } from '../pages/profile/edit-user/edit-user.component';

const userRoutes: Routes =  [
    {path: 'user', component: UserComponent },
    {path: 'user/edit-user', component: EditUserComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule]
})

export class UserRoutingModule { }
