import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  students: any = [];
  plans: any = [];
  Teachers: any = [];

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  createContact(data: any) {
    this.http.post("https://localhost:7185/api/Contact", data).subscribe({
      next: () => {console.log('Created');
              // this.toastr.success('Sent Successfully');

      },
      error: (err) => {
        // this.toastr.error('retry');
        this.toastr.success('Sent Successfully');

      },
    });
  }


      //  contact:any=[]
//   GetAllContacts(){
//     this.http.get("https://localhost:7185/api/Contact").subscribe(
//       {
//       next: (x)=>{this.contact=x},
//       error:(err)=>{console.log(err)}
      
//       })
 
// }
  //student

  GetAllStudents() {
    this.spinner.show();
    this.http
      .get('https://localhost:7185/api/Student/GetAllStudents')
      .subscribe({
        next: (x) => {
          this.students = x;
          this.spinner.hide();
        },
        error: (err) => {
          console.log(err);
          this.spinner.hide();
        },
      });
  }

  DeleteStudent(id: number) {
    this.http
      .delete('https://localhost:7185/api/Student/DeleteStudent/' + id)
      .subscribe({
        next: () => {
          console.log('student deleted');
          this.GetAllStudents();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  CreateStudent(data: any) {
    data.profileimage = this.profileimage;

    // debugger
    this.http
      .post('https://localhost:7185/api/Student/CreateStudent', data)
      .subscribe({
        next: () => {
          console.log('Created Successfully');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  GetAllPlans() {
    this.http.get('https://localhost:7185/api/Plan/GetAllPlans').subscribe({
      next: (x) => {
        this.plans = x;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  DeletePlan(id: number) {
    this.http
      .delete('https://localhost:7185/api/Plan/DeletePlan/' + id)
      .subscribe({
        next: () => {
          console.log('student deleted');
          this.GetAllPlans();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  CreatePlan(data: any) {
    console.log(data);
    data.coverimage = this.coverimage;
    console.log(data);
    this.http
      .post('https://localhost:7185/api/Plan/CreatePlan', data)
      .subscribe({
        next: () => {
          //  console.log ("Created Successfully")
          this.toastr.success('Plan Created Successfully');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  UpdatePlan(data: any) {
    const updateData = {
      planid: data.planid,
      planname: data.planname,
      plandescription: data.plandescription,
      coverimage: data.coverimage,
      planprice: data.planprice,
      startdate: data.startdate,
      enddate: data.enddate,
    };

    this.http
      .put('https://localhost:7185/api/Plan/UpdatePlan', updateData)
      .subscribe({
        next: () => {
          console.log('Updated');
          this.GetAllPlans();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  coverimage: string = '';
  UploadPlanImage(data: any) {
    this.http
      .post('https://localhost:7185/api/Plan/UploadImage', data)
      .subscribe({
        next: (result: any) => {
          this.coverimage = result.coverimage;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  profileimage: string = '';
  UploadStudentImage(data: any) {
    this.http
      .post('https://localhost:7185/api/student/UploadImage', data)
      .subscribe({
        next: (result: any) => {
          this.profileimage = result.profileimage;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  // User
  token: any;
  Login(data: any) {
    this.http
      .post('https://localhost:7185/api/Auth/Studentlogin', data)
      .subscribe({
        next: (result) => {
          this.token = result;
        },
        error: (err) => {
          console.log('Unauthorized');
        },
      });
  }

  GetAllTeachers() {
    this.http.get('https://localhost:7185/api/Teacher').subscribe({
      next: (x) => {
        this.Teachers = x;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
