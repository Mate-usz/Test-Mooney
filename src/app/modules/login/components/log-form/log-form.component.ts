import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AccountService } from 'src/app/shared/services/account.service';

export interface LogFormStyle{
  title: string;
  showEmail: boolean;
  showPassword: boolean;
  buttonText: string;
}

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  _logFormStyle: LogFormStyle = {
    title: 'Lorem Ipsum',
    showEmail: true,
    showPassword: true,
    buttonText: 'dolor'
  }

  @Input() set logFormStyle(value: Partial<LogFormStyle>) {
    this._logFormStyle = { ...this._logFormStyle, ...value };

    if(this._logFormStyle.showPassword)
      this.logForm.controls['password'].setValidators([Validators.required]);
  }
  @Input() redirect!: string;

  logForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}'),
      Validators.email
    ])),
    password: new FormControl('')
  })

  // Used to show/hide password
  passwordType: 'password' | 'text' = 'password';

  // Used to show error message
  valid = true;

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  togglePassword(){
    this.passwordType = this.passwordType === 'text'? 'password' : 'text';
  }

  onButtonClicked(){

    if(!this._logFormStyle.showPassword)
      this.accountService.emailToRegister(this.logForm.controls['email'].value);
    else
      this.valid = this.accountService.accountToLog(this.logForm);

    this.router.navigate([this.redirect]);
  }
}
