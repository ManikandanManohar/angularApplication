import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomService } from 'src/app/service/custom.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {
  id: any;
  jobsArr: Array <any>=[]
  employees: any = [];
  searchText!: string;
  page = 1;
  pageSize =10;
user:any;
  fetchData: any;
  constructor(
    private Service: CustomService,
    private route: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) { 
    
  }
  ngOnInit(): void { 
    for(let i = 1; i <= 100; i++){
      this.jobsArr.push({ i});}
    this.table();
  };
  table() {
    this.Service.Getcareers().subscribe((res: any) => {
      this.jobsArr = res;
      console.log('getcreat api store');

    }, err => {
      console.log(err);
      console.log(err);
    })
  };
  open(content:any , data:any) {
    this.fetchData = data;
    this.modalService.open(content, {size:'lg'})
  }

  onedit(id: any) {
    if (confirm("Are you sure to edit")) {
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
  Search(){
    if(this.user == ""){
      this.ngOnInit();
    }
    else{
      this.user = this.user.filter( (res: any) =>{
        return res.user.toLocaleLowerCase().match(this.user)
      })
    }
  }
}
