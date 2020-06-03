import {FormGroup} from '@angular/forms';

export function MustMatch(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const passControl = formGroup.controls[password];
    const confirmPassControl = formGroup.controls[confirmPassword];

    if (passControl.errors && !confirmPassControl.errors.mustMatch) {
      return;
    }

    if (passControl.value !== confirmPassControl.value) {
      confirmPassControl.setErrors({mustMatch: true});
    } else {
      confirmPassControl.setErrors(null);
    }
  }
}
