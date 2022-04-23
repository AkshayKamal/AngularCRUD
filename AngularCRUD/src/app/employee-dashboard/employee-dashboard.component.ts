import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  @Input() Employee !:FormGroup
  public EmployeeList: any;
  public Showupdate: boolean=false;
  public Emp_Id: any;
  constructor(private formbuilder:FormBuilder, private service:ApiService) { }

  ngOnInit(): void {
    this.LoadForm()
    this.getEmployeedata()

  }

  LoadForm(){
    this.Employee=this.formbuilder.group({
      firstname:['',''],
      lastname:['',''],
      email:['',''],
      mobileno:['',''],
      salary:['','']
    })
  }

  Add(){
    this.Showupdate=false
  }

  PostEmployeedata(){
    this.service.PostEmployee(this.Employee.value).subscribe(data=>{
      debugger
      if(data){
        this.resetForm()
      }
    })
  }

  getEmployeedata(){
    this.service.GetEmployee().subscribe(data=>{
      debugger
      if(data){
        this.EmployeeList=data
      }
    })
  }

  deleteEmployee(list:any){
    debugger
    this.service.deleteEmployee(list.id).subscribe(data=>{
      debugger
      if(data){
        this.resetForm()
      }
    })
  }

  editEmployeeDetails(list:any){
    this.Showupdate=true
    this.Emp_Id=list.id
    this.Employee.get('firstname')?.setValue(list.firstname)
    this.Employee.get('lastname')?.setValue(list.lastname)
    this.Employee.get('mobileno')?.setValue(list.mobileno)
    this.Employee.get('email')?.setValue(list.email)
    this.Employee.get('salary')?.setValue(list.salary)
  }
 
  updateEmployee(){

    this.service.UpdateEmployee(this.Emp_Id,this.Employee.value).subscribe(data=>{
      debugger
      if(data){
        this.resetForm()
      }
    })
  }

  resetForm(){
    let ref=document.getElementById('cancel')
    ref?.click()
    this.Employee.reset()
    this.getEmployeedata()
  }

}
