import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(public _adminService: AdminService,private toastr: ToastrService,private router : Router) {}

  showSuccess() {
    this.toastr.success('Student added successfully', 'Success', { timeOut: 1000 });
  }
  CreateStudentForm : FormGroup = new FormGroup({
    studentfname: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    studentlname: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    phoneno: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
        ]),
    dob: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    gender: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
 
    profileimage: new FormControl(),
  });

  CreateStudent(){
    console.log(this.CreateStudentForm.value);
    this._adminService.CreateStudent(this.CreateStudentForm.value);
    this.showSuccess();
    setTimeout(() => {
      this.router.navigate(['/admin/all-students']);
    }, 1000);

  }

  UploadStudentImage(event: any){
    console.log(event);
    let file = event.target.files[0];
    let form = new FormData();
    form.append('file', file);
    this._adminService.UploadStudentImage(form);
  }
}
