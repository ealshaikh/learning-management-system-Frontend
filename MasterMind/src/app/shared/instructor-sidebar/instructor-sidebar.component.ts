import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-sidebar',
  templateUrl: './instructor-sidebar.component.html',
  styleUrls: ['./instructor-sidebar.component.css']
})
export class InstructorSidebarComponent {
  isStudentsCollapseVisible: boolean = false;
  isTeachersCollapseVisible: boolean = false;

  toggleStudentsCollapse() {
    this.isStudentsCollapseVisible = !this.isStudentsCollapseVisible;
  }

  toggleTeachersCollapse() {
    this.isTeachersCollapseVisible = !this.isTeachersCollapseVisible;
  }
}
