import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomService } from 'src/app/service/custom.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {
id:any;

  jobsArr: any = [];
  employees: any =[];
  constructor(
    private Service: CustomService,
    private route: Router,
    ) {}
  ngOnInit(): void {
    this.table();
    
  };
  table() {
    this.Service.Getcareers().subscribe((res: any) => {
      this.jobsArr = res;
      console.log('getcreat api store');
      
    }, err => {
      console.log(err);
    })
  };
  onedit(id: any) {
    if (confirm("Are you sure to Edit")) {
      this.route.navigate(['/home/userdetails', id])
      }
    else {
      return;
    }
  
}
  ondelete(id: any) {
    if (confirm("Are you sure to delete ")) {
      this.Service.deletejob(id).subscribe(res => {
        this.table();
      });
    }
    else {
      return;
    }
  };
}
