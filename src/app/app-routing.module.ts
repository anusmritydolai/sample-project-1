import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule) },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m=>m.ClientsModule) },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
