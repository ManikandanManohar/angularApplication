import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TrosterService } from 'src/app/service/troster.service';


interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  value="";
  CopyText='';
 
  user: IUser;

  shifts: any = [
    {color: 'red'},
   

  ]
  selectedFile: any;
   constructor (
    private troster:TrosterService
   ){
    this.user = {} as IUser;

   }
toDate = new Date ();
num = 123457890;
  data: any;
  ngOnInit(): void {
  }
moduleservice(){
  this.troster.showWarning("manii","")
}

clearValue() {
  this.value="";
// Create a new Date object
var myDate = new Date();

// Add 2 hours to the current time
myDate.setHours(myDate.getHours() + 2);

// Convert the Date object to a string in time format
var timeString = myDate.toLocaleTimeString();

// Output the time string
console.log(timeString);
}
isValid: boolean = false;


public validate(form: NgForm): void {
  if (form.invalid) {
    for (const control of Object.keys(form.controls)) {
      form.controls[control].markAsTouched();
    }
    console.log('return')

    return;
  }
  console.log(form.value)

}

url="";

onFileSelected(e: any): void {

  if(e.target.files){
    var reader =new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
this.url=event.target.result;
}
  }
}
}
