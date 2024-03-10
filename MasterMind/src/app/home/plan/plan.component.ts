import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  constructor(public _adminService: AdminService)  {}

  ngOnInit() {
    this._adminService.GetAllPlans()
  }
}
