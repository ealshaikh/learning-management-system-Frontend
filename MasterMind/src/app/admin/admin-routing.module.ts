import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { StudentlistComponent } from './student-list/studentlist.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { PlainListComponent } from './plain-list/plain-list.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { SectionistComponent } from './section-list/sectionist.component';
import { AddSectionComponent } from './add-section/add-section.component';

const routes: Routes = [
  {
    path : 'index',
    component: IndexComponent
  },
  { path: 'all-students', component: StudentlistComponent },
  { path: 'add-student', component: AddStudentComponent },

  { path: 'all-instructors', component: InstructorListComponent },
  { path: 'add-instructor', component: AddInstructorComponent },

  { path: 'all-plans', component: PlainListComponent },
  { path: 'add-plan', component: AddPlanComponent },

  { path: 'all-courses', component: CourseListComponent },
  { path: 'add-course', component: AddCourseComponent },

  { path: 'all-sections', component: SectionistComponent },
  { path: 'add-section', component: AddSectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
