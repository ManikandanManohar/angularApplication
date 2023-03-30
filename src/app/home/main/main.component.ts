import { Component, Input, OnInit } from '@angular/core';
import { CustomService } from 'src/app/service/custom.service';
import { FormsModule } from '@angular/forms'
import { UserviewComponent } from '../userview/userview.component';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  [x: string]: any;
  searchdata:any;
  @Input () name! :string;
 public items = [];
  newTask:any; 
  page = 4;
   constructor( 
    private service: CustomService,
    private modalService: NgbModal
  ){

  }
  ngOnInit(): void {
  }

  url= '/assets/OIP.jpg' 
   onFileSelected(e: any): void {

    if(e.target.files){
      var reader =new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
  this.url=event.target.result;
  }
    }
  }
  public  addToList() {
    if (this.newTask == '') {
    }
    else {
      this.items.push(this.newTask as never);
        this.newTask = '';
    }
}


public deleteTask(index:any) {
    this.items.splice(index, 1);
}


open(content:any) {
  this.modalService.open(content, {size:'lg'})
}
}
