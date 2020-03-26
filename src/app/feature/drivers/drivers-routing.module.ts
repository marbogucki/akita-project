import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DriversRouterComponent } from "@app/feature/drivers/container/drivers-router/drivers-router.component";
import { DriversComponent } from "@app/feature/drivers/component/drivers/drivers.component";
import { DriversAddFormComponent } from "@app/feature/drivers/component/drivers-add-form/drivers-add-form.component";
import { DriversEditFormComponent } from "@app/feature/drivers/component/drivers-edit-form/drivers-edit-form.component";

const routes: Routes = [
  {
    path: "",
    component: DriversRouterComponent,
    children: [
      {
        path: "",
        component: DriversComponent,
      },
      {
        path: "add-driver",
        component: DriversAddFormComponent,
      },
      {
        path: "edit-driver/:id",
        component: DriversEditFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversRoutingModule {}
