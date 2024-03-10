import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  
  constructor(public _adminService: AdminService)  {}

  ngOnInit() : void{
    this._adminService.GetAllPlans()
    this._adminService.GetAllTeachers()

  }

}
