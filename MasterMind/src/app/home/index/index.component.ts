import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  
  constructor(public _adminervice : AdminService)  {}

  ngOnInit() : void{
    this._adminervice.GetAllPlans()
    this._adminervice.GetAllTeachers()

  }


}



