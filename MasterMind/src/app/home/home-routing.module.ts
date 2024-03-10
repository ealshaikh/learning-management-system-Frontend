import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InstructorComponent } from './instructor/instructor.component';
import { PlanComponent } from './plan/plan.component';
import { PaymentComponent } from './payment/payment.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    component: IndexComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'instructor',
    component: InstructorComponent
  },
  {
    path:'plan',
    component: PlanComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  }

];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
