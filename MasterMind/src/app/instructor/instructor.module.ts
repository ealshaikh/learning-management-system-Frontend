import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../Services/admin.service';
import { SharedModule } from '../shared/shared.module';

import { InstructorRoutingModule } from './instructor-routing.module';
import { IndexComponent } from './index/index.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';


@NgModule({
  declarations: [
    IndexComponent,
    AttendanceListComponent,
    AddAttendanceComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SharedModule
  ],
  providers: [
    AdminService
  ]
})
export class InstructorModule { }
