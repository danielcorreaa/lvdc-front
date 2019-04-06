import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';



@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput:ElementRef<HTMLInputElement>;

  constructor(private formBuilder:FormBuilder, 
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() : void{

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  
  login(){
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    
    this.authService
        .authenticate(userName, password)
        .subscribe(
            () => 
            this.router.navigate(['filmes']),
            err => {
                alert(err);
                this.loginForm.reset();
                this.userNameInput.nativeElement.focus();
            }
        );     
     
  }

}
