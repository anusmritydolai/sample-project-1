import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule) },
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
