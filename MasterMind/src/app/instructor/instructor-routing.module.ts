import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';

const routes: Routes = [
  {
    path : 'index',
    component: IndexComponent
  },
  {
    path : 'add-attendance',
    component : AddAttendanceComponent
  },
  {
    path : 'attendance-list',
    component : AttendanceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
