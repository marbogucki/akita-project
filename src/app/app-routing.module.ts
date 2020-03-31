import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { IsAuthGuard } from '@app/core/guards/is-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(module => module.AuthModule),
    canActivate: [IsAuthGuard],
  },
  {
    path: 'drivers',
    loadChildren: () => import('./feature/drivers/drivers.module').then(module => module.DriversModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
