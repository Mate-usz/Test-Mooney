import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.css']
})
export class RegistrationSuccessComponent implements OnInit {

  email = '';
  password = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    console.log('Generating password...');
    this.password = this.accountService.generatePassword();
    this.email = this.accountService.currentUserEmail;
  }
}
