import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

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
