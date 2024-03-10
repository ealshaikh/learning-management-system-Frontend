import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent {
  constructor(public _adminService: AdminService,private router: Router) {}

  CreatePlanForm : FormGroup = new FormGroup({
    planname: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    plandescription: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    planprice: new FormControl('', [
      Validators.required
        ]),
        startdate: new FormControl('', [
      Validators.required
    ]),
    enddate: new FormControl('', [
      Validators.required
    ]),
 
    coverimage: new FormControl(),
  });

  CreatePlan(){
    console.log(this.CreatePlanForm.value);
    this._adminService.CreatePlan(this.CreatePlanForm.value);
    this.router.navigate(['/admin/all-plans']);

  }

  UploadImage(event: any){
    console.log(event);
    let file = event.target.files[0];
    let form = new FormData();
    form.append('file', file);
    this._adminService.UploadPlanImage(form);
  }
}

