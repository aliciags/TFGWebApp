import {Injectable} from '@angular/core';
// import { FormGroup } from '@angular/forms';

@Injectable()
export class SignInService {

    /*constructor(private data : FormGroup){

    }*/

    public signIn(password: string, passwordConfirmation: string): boolean{

        if (password === passwordConfirmation) { return true; }
        else { return false; }
    }

    /*public setData(signIn : FormGroup){
        this.data = signIn;
   }*/

}
