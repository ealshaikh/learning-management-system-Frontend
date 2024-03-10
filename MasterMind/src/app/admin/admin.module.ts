import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { AdminService } from '../Services/admin.service';
import { StudentlistComponent } from './student-list/studentlist.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { PlainListComponent } from './plain-list/plain-list.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { SectionistComponent } from './section-list/sectionist.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent,
    StudentlistComponent,
    AddStudentComponent,
    AddInstructorComponent,
    InstructorListComponent,
    PlainListComponent,
    AddPlanComponent,
    CourseListComponent,
    AddCourseComponent,
    SectionistComponent,
    AddSectionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
