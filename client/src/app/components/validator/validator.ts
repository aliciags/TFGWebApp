import { FormControl, FormGroup } from '@angular/forms';

export class Validator{
    
    static checkPasswords(group: FormGroup) { 
        const password = group.get('password')?.value;
        const confirmPassword = group.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { notSame: true }     
    }



}
