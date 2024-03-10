import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  isStudentsCollapseVisible: boolean = false;
  isTeachersCollapseVisible: boolean = false;
  isPlansCollapseVisible: boolean = false;
  isCoursesCollapseVisible: boolean = false;
  isSectionsCollapseVisible: boolean = false;

  toggleStudentsCollapse() {
    this.isStudentsCollapseVisible = !this.isStudentsCollapseVisible;
  }

  toggleTeachersCollapse() {
    this.isTeachersCollapseVisible = !this.isTeachersCollapseVisible;
  }
  togglePlansCollapse(){
    this.isPlansCollapseVisible = !this.isPlansCollapseVisible
  }
  toggleCoursesCollapse() {
    this.isCoursesCollapseVisible = !this.isCoursesCollapseVisible;
  }

  toggleSectionsCollapse(){
this.isSectionsCollapseVisible = !this.isSectionsCollapseVisible
  }
}
