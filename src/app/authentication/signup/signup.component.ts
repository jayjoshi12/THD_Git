import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { AuthService } from "../auth.service";  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
 
  onSignup(form: NgForm){  
    if(form.invalid){  
      return;  
    }  
    this.authService.CreateUser(form.value.email, form.value.password); 
  }
}
