import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversRouterComponent } from '@app/feature/drivers/container/drivers-router/drivers-router.component';
import { DriversComponent } from '@app/feature/drivers/component/drivers/drivers.component';

const routes: Routes = [
  {
    path: '',
    component: DriversRouterComponent,
    children: [
      {
        path: '',
        component: DriversComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
