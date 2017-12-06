
import { AbstractControl } from '@angular/forms';

export class FormValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('Password').value; // to get value in input tag
    let confirmPassword = AC.get('ConfirmPassword').value; // to get value in input tag
    if (password != confirmPassword) {
      AC.get('ConfirmPassword').setErrors({ MatchPassword: true })
    } else {
      return null;
    }
  }
  
  static PasswordValidator(AC: AbstractControl) {
    var passwordPattern = /^[0-9]{6}$/;
    let password = AC.get('Password').value;
    if (passwordPattern.test(password)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }
}