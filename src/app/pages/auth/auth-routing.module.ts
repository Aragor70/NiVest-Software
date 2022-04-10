import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { AlgorithmsPage } from '../algorithms/algorithms.page';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: '/dashboard',
    component: AlgorithmsPage,
    canActivate: [AuthGuard]
  },
  {
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
