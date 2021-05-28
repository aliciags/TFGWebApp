import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';

import { SignInService } from './sign-in-form/sign-in-form.service';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';


@NgModule({
    declarations: [
        UserComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    providers: [ SignInService, ApiService, LocalStorageService ]
})

export class UserModule { }
