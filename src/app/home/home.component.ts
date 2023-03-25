import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomService } from '../service/custom.service';
import { TrosterService } from '../service/troster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  menu = false;

constructor(private service : CustomService,
   private router:Router,
   private troster :TrosterService
  ){ 
}
ngOnInit(): void {
  this.service.UserDetail().subscribe(res=>{
    this.user = res.data.loginObj.agentObj.agentName;
    console.log(this.user);
  })
} 
Logout(){
  this.service.Logout();
  this.troster.showSuccess("Lougout successfully !!", "tutsmake.com")
}
showToasterSuccess(){
  this.troster.showSuccess("Data shown successfully !!", "tutsmake.com")
}
toggle(){
  // this.menu=true;
this.menu = !this.menu
}
}
