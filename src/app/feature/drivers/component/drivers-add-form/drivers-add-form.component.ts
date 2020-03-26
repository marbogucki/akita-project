import { Component } from "@angular/core";
import { DriversService } from "@app/feature/drivers/state/drivers.service";
import { Driver } from "@app/feature/drivers/models/driver";

@Component({
  templateUrl: "./drivers-add-form.component.html",
  styleUrls: ["./drivers-add-form.component.scss"],
})
export class DriversAddFormComponent {
  constructor(private driversService: DriversService) {}

  public saveDriver(driverValue: Partial<Driver>): void {
    this.driversService
      .addDriver(driverValue)
      .subscribe((data) => console.log(data));
  }
}
