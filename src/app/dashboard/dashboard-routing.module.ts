import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DachboardComponent } from './dachboard/dachboard.component';

const routes: Routes = [
  { path: '', component: DachboardComponent, children: [
    { path: 'clients', loadChildren: () => import('../clients/clients.module').then(m=>m.ClientsModule) },
    { path: 'company', loadChildren: () => import('../company/company.module').then(m=>m.CompanyModule) },

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
