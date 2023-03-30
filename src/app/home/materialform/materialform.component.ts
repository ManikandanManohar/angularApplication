import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-materialform',
  templateUrl: './materialform.component.html',
  styleUrls: ['./materialform.component.scss']
})
export class MaterialformComponent implements OnInit  {

  myForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) { }
  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('',Validators.required),
      password: ['',Validators.required],
    });
  }
  errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }
  submitForm() {
    if(this.myForm.invalid){
      return;
    }
    else{
      console.log(this.myForm.value);
      
    }
  }
}
