import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DachboardComponent } from './dachboard/dachboard.component';

const routes: Routes = [
  { path: '', component: DachboardComponent, children: [
    { path: '', redirectTo: '/clients' },
    { path: 'clients', loadChildren: () => import('../clients/clients.module').then(m=>m.ClientsModule) },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
