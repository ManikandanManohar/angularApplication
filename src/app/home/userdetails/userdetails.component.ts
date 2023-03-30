import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from 'src/app/service/custom.service';
import { TrosterService } from 'src/app/service/troster.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  @Input() fetchData:any;
  listForm!: FormGroup;
  isSubmit = false;
  user: any;
  value = [];
  length = 1;
  id: any;
  pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  date = new Date();
  constructor(
    private service: CustomService,
    private fv: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private troster: TrosterService
  ) { }
  ngOnInit(): void {
    this.listForm = this.fv.group({
      user: [null, Validators.required],
      phonenumber: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.pattern)]],
      gender: new FormControl('', Validators.required),
      addres2: [null, Validators.required],
      city: [null, Validators.required],
      fathername: [null, Validators.required],
      checkbox: [false, Validators.required],
      employees: this.fv.array(
        [this.createEmpFormGroup()])
    })
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.service.Edit(this.id).subscribe((res) => {
        this.listForm.patchValue({
          user: res.user,
          phonenumber: res.phonenumber,
          password: res.password,
          email: res.email,
          gender:res.gender,
          addres1: res.addres1,
          addres2: res.addres2,
          city: res.city,
          checkbox: res.checkbox,
          fathername: res.fathername,
          employees:res.employees
        })
      })
    }
    if(this.fetchData){
      console.log(this.fetchData);
      this.listForm.patchValue({
        user: this.fetchData.user,
        phonenumber: this.fetchData.phonenumber,
        password: this.fetchData.password,
        email: this.fetchData.email,
        addres1: this.fetchData.addres1,
        addres2: this.fetchData.addres2,
        gender:this.fetchData.gender,
        city: this.fetchData.city,
        checkbox: this.fetchData.checkbox,
        fathername: this.fetchData.fathername,
        employees:this.fetchData.employees
      })
    }
    this.service.UserDetail().subscribe(res => {
      this.user = res.data.loginObj.agentObj.agentName;
    });
  }
  //    ------ --------Form Array ----------//
  createEmpFormGroup() {
    return this.fv.group({
      empName: ['', [Validators.required]],
      age: ['', Validators.required]
    })
  }
  get employees(): FormArray {
    return this.listForm.get('employees') as FormArray;
  }
  addEmployee() {
    let fg = this.createEmpFormGroup();
    this.employees.push(fg);
  }
  deleteEmployee(idx: number) {
    this.employees.removeAt(idx);
  }
  //    ------ --------Form Array Completed  ----------//
  //    ------ -------- Form  validation  ----------//
  get f() { return this.listForm.controls };
  submit() {
    this.isSubmit = true;
    if (this.listForm.invalid) {
      this.troster.showError("invalid user", "Employee")
      return;
    }
    if (this.id) {
      this.service
        .Update(this.listForm.value, this.id)
        .subscribe((res) => {
          this.router.navigate(['/home/userview'])
          this.troster.showSuccess("edit success", "Employee")
        }, err => {
          this.troster.showError("check edit", "Employee")
        }
        );
    }
    else {
      console.log('submit work');
      this.service.createCarrers(this.listForm.value).subscribe((res: any) => {
        this.router.navigate(['/home/userview']);
        this.troster.showSuccess("Add success", "Employee")
      })
    }
  }
  //    ------ -------- Form  validation  Completed ----------//
  //    ------ -------- CheckBox control  validation  ----------//
  addControl() {
    (this.listForm.value.checkbox) ?
      this.listForm.addControl("checkarrayone",
        new FormControl("", Validators.required)) :
      this.listForm.removeControl('checkarrayone');
  }
  //    ------ -------- CheckBox control  validation Completed  ----------//
}




