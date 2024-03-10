import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public _adminService: AdminService)  {}


  ngOnInit() : void{
    this._adminService.GetAllTeachers()

  }

}
