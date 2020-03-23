import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversRouterComponent } from './container/drivers-router/drivers-router.component';
import { DriversComponent } from './component/drivers/drivers.component';

@NgModule({
  declarations: [DriversRouterComponent, DriversComponent],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule { }
