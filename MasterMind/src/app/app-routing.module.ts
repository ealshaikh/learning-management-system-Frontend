import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  {
    path: '',
    loadChildren: ()=>import('./home/home.module').then(x=>x.HomeModule)
  }
  ,
  {
    path: 'admin',
    loadChildren: ()=>import('./admin/admin.module').then(x=>x.AdminModule)
  },
  {
    path: 'instructor',
    loadChildren : ()=> import('./instructor/instructor.module').then(x=>x.InstructorModule)
  },
  {
    path : 'auth',
    loadChildren : ()=>import('./auth/auth.module').then(x=>x.AuthModule)

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
