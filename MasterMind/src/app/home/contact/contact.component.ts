import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public _adminService: AdminService){}



  createContactForm : FormGroup =new FormGroup( {
    // message :new FormControl('',[Validators.required]),
    email :new FormControl('',[Validators.required, Validators.email]),
    fullname:new FormControl('',[Validators.required]),
   messeage:new FormControl('',[Validators.required]),
  })


  CreateContact(){
    console.log(this.createContactForm.value)
  this._adminService.createContact(this.createContactForm.value)
  }

}
