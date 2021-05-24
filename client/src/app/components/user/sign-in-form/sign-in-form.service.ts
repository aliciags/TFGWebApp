import {Injectable} from '@angular/core';
//import { FormGroup } from '@angular/forms';

@Injectable()
export class SignInService {

    /*constructor(private data : FormGroup){

    }*/

    public signIn(password:string, passwordConfirmation: string){

        if(password === passwordConfirmation) return true;
        
        return false;
    }

    /*public setData(signIn : FormGroup){
        this.data = signIn;
   }*/

}
