import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [
    { email: 'test@mail.it', password: '12345' }
  ];

  currentUserEmail = '';
  logged = false;

  constructor() { }

  accountToLog(form: FormGroup): boolean{
    console.log('Trying to log!');
    this.currentUserEmail = form.controls['email'].value;
    this.logged = this.accounts.find( (account) =>
            account.email == this.currentUserEmail)?.
            password == form.controls['password'].value;



    return this.logged;

  }

  emailToRegister(email: string){
    this.currentUserEmail = email;
  }

  generatePassword(): string{
    const passw = Math.random().toString(36).slice(2);
    this.accounts.push( { email: this.currentUserEmail, password: passw} );
    console.log(this.accounts);
    return passw;
  }
}
