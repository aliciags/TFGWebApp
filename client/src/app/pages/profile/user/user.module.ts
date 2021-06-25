import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { UserComponent } from './user.component';
import { UserRoutingModule } from '../../../router/user.routing';

import { SignInService } from '../sign-in-form/sign-in-form.service';
import { ApiService } from 'src/app/core/service/api.service';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';
import { EditUserComponent } from '../edit-user/edit-user.component';


@NgModule({
    declarations: [
        UserComponent,
        EditUserComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        UserRoutingModule
    ],
    providers: [ SignInService, ApiService, LocalStorageService ]
})

export class UserModule { }
