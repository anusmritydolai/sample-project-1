import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DachboardComponent } from './dachboard/dachboard.component';

const routes: Routes = [
  { path:'dashboard', component: DachboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
