import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AdmissionComponent } from './admission/admission.component';
import { AlumniComponent } from './alumni/alumni.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: "",pathMatch: "full",redirectTo: "/Home"},
  {path: "Home", component:HomeComponent},
  {path: "About", component:AboutComponent},
  {path: "Admission", component:AdmissionComponent},
  {path: "Alumni", component:AlumniComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
