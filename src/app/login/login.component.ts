import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr/public_api';
import { CustomService } from '../service/custom.service';
import { TrosterService } from '../service/troster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForms!: FormGroup;
  isSubmit = false;
  controls=false
  response: any;
  loading= false;
  wronguser=false;
password: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CustomService,
    private http: HttpClient,
    private troster:TrosterService
  ) {
  }
  ngOnInit(): void {
    this.loginForms = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]

    })
  }
  get f() { return this.loginForms.controls }


  loginCheck() {
    this.isSubmit = true;
    if (!this.loginForms.valid) {
this.troster.showWarning("invalid login !!","UserLogin")
      return;
    }
     else {
      this.service.Login(this.loginForms.value).subscribe(res => {
       this.response = res.data.jwt;
        localStorage.setItem('token', this.response);
        this.loading=true;
        this.router.navigate(['/home']);
        console.log(this.loginForms.value);
        this.troster.showSuccess("Login Success !!","UserLogin");
      },err=>{
        console.log('wong user name');
        this.wronguser=true;
        this.troster.showError("wrong user","UserLogin");
      })       
    }
  };
}






