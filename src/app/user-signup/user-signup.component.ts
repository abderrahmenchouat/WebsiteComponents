import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  constructor(private router: Router) { }

  onSubmit(form: NgForm) {

    console.log(form.value);
    this.router.navigate(['/userdashboard']);

  }
}

