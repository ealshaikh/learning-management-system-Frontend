import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlanComponent } from './plan/plan.component';
import { InstructorComponent } from './instructor/instructor.component';
import { SharedModule } from '../shared/shared.module';
import { AdminService } from '../Services/admin.service';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    ContactComponent,
    PlanComponent,
    InstructorComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    AdminService
  ]
})
export class HomeModule { }
