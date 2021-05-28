import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const userRoutes: Routes =  [
    {path: 'user', component: UserComponent },
    // {path: 'signin', component: UserFormComponent},
    // {path:'**', component: NotFoundComponent}
];

// const userRouting = RouterModule.forChild(userRoutes);

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule]
})

export class UserRoutingModule { }
