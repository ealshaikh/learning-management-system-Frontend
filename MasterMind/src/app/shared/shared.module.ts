import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { InstructorHeaderComponent } from './instructor-header/instructor-header.component';
import { InstructorSidebarComponent } from './instructor-sidebar/instructor-sidebar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentSidebarComponent } from './student-sidebar/student-sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    InstructorHeaderComponent,
    InstructorSidebarComponent,
    StudentHeaderComponent,
    StudentSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
   
   ],
  exports:[
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    AdminSidebarComponent,
    AdminHeaderComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InstructorHeaderComponent,
    InstructorSidebarComponent,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxSpinnerModule
    
  ]
})
export class SharedModule { }
