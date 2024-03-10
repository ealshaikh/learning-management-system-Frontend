import { Component, ViewChild  } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-plain-list',
  templateUrl: './plain-list.component.html',
  styleUrls: ['./plain-list.component.css'],
})
export class PlainListComponent  {
  @ViewChild('ConfirmationDialog') ConfirmDeleteDialog: any;
  @ViewChild('UpdateDialog') UpdatePlanDialog: any;
  @ViewChild('dataTable') table: any;





  constructor(public _adminService: AdminService, 
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this._adminService.GetAllPlans();
  }

  DeletePlan(id: number) {
    this._adminService.DeletePlan(id);
  }

  OpenDeleteStudentDialgo(planId: number) {
    var dialog = this.dialog.open(this.ConfirmDeleteDialog);
    dialog.afterClosed().subscribe((result) => {
      if (result == 'yes') this.DeletePlan(planId);
    });
  }


  UpdatePlanForm: FormGroup = new FormGroup({
    planid: new FormControl(),
    planname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    plandescription: new FormControl('', [Validators.required, Validators.minLength(10)]),
    coverimage: new FormControl('', [Validators.required]),
    planprice: new FormControl('', [Validators.required]),
    startdate: new FormControl('', [Validators.required]),
    enddate: new FormControl('', [Validators.required]),
    certificates: new FormControl(), // Add this line

  });
  


  // OpenUpdateDialog(s: any) {
  //   // console.log(s);
  //   s.certificates = ''; // You can set it to an initial value or leave it empty

  //   this.UpdatePlanForm.setValue(s);
  //   this.dialog.open(this.UpdatePlanDialog);
  // }

  OpenUpdateDialog(s: any) {
    // Create an object with only the properties that match your form controls
    const updateData = {
        planid: s.planid,
        planname: s.planname,
        plandescription: s.plandescription,
        coverimage: s.coverimage,
        planprice: s.planprice,
        startdate: s.startdate,
        enddate: s.enddate
    };

    // Use patchValue to update only the specified form controls
    this.UpdatePlanForm.patchValue(updateData);

    this.dialog.open(this.UpdatePlanDialog);
}


  UpdatePlan() {
    this._adminService.UpdatePlan(this.UpdatePlanForm.value);
  }
}
