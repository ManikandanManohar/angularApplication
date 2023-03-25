import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

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

}
