import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  @Input() Employee !:FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.Employee=this.formbuilder.group({
      firstname:['',''],
      lastname:['',''],
      email:['',''],
      mobileno:['',''],
      salary:['','']
    })

  }

}
