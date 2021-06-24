import { FormControl, FormGroup } from '@angular/forms';

export class Validator{

    static checkPasswords(group: FormGroup): any {
        const password = group.get('password')?.value;
        const confirmPassword = group.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { notSame: true };
    }
}
