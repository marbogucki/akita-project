import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DriversRoutingModule } from './drivers-routing.module';

import { DriversRouterComponent } from './container/drivers-router/drivers-router.component';
import { DriversComponent } from './component/drivers/drivers.component';
import { DriversFormComponent } from './component/drivers-form/drivers-form.component';
import { DriversAddFormComponent } from './component/drivers-add-form/drivers-add-form.component';
import { DriversEditFormComponent } from './component/drivers-edit-form/drivers-edit-form.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    DriversRouterComponent,
    DriversComponent,
    DriversFormComponent,
    DriversAddFormComponent,
    DriversEditFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, DriversRoutingModule],
})
export class DriversModule {}
