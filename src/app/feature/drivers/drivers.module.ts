import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversRouterComponent } from './container/drivers-router/drivers-router.component';
import { DriversComponent } from './component/drivers/drivers.component';
import { DriversFormComponent } from './component/drivers-form/drivers-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DriversAddFormComponent } from './component/drivers-add-form/drivers-add-form.component';
import { DriversEditFormComponent } from './component/drivers-edit-form/drivers-edit-form.component';

@NgModule({
  declarations: [DriversRouterComponent, DriversComponent, DriversFormComponent, DriversAddFormComponent, DriversEditFormComponent],
    imports: [
        CommonModule,
        DriversRoutingModule,
        ReactiveFormsModule
    ]
})
export class DriversModule { }
