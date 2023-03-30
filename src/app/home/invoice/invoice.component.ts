import { Component, OnInit } from '@angular/core';
import { CustomService } from 'src/app/service/custom.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  cus:any= [];
  agent: any=[];
  tableList:any=[];
  tableTotal:any=[];
  tableBodyTotal:any=[]
  tableBodyList:any=[];
  constructor(
    private service:CustomService,
  ){}
  ngOnInit(): void {
    this.service.invoiceGet().subscribe(res=>{
      this.cus=res.data.invObj;
      this.agent=res.data.invObj.agentObj;
      this.tableTotal=res.data.invItemList[0];
      this.tableBodyTotal=res.data.invItemList[1];
      this.tableList=res.data.invItemList[0].componenetList;
      this.tableBodyList=res.data.invItemList[1].componenetList;
      console.log(this.tableTotal);
    })
  }

}
