import {Injectable} from '@angular/core';

@Injectable()
export class UserFormService {

    public actualYear: number = new Date().getFullYear();

    public checkValidYear(birthYear: number){

        if(birthYear > this.actualYear ){ 
            console.log("year greather than 2021");
            return false;
        }
        
        return true;
    }
}