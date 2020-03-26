import { Component, OnInit } from '@angular/core';
import { Driver } from '@app/feature/drivers/models/driver';
import { DriversQuery } from '@app/feature/drivers/state/drivers.query';
import { ActivatedRoute } from '@angular/router';
import { DriversService } from '@app/feature/drivers/state/drivers.service';

@Component({
  templateUrl: './drivers-edit-form.component.html',
  styleUrls: ['./drivers-edit-form.component.scss'],
})
export class DriversEditFormComponent implements OnInit {
  driverFormData: Driver;

  constructor(
    private driversQuery: DriversQuery,
    private route: ActivatedRoute,

    private driversService: DriversService
  ) {}

  ngOnInit(): void {
    this.getDriver();
  }

  get driverId(): number {
    return +this.route.snapshot.params.id;
  }

  public editDriver(driver: Partial<Driver>) {
    const driverValue: Partial<Driver> = {
      id: this.driverId,
      ...driver,
    };

    this.driversService
      .updateDriver(driverValue)
      .subscribe((data) => console.log(data));
  }

  private getDriver(): void {
    if (this.driversQuery.hasEntity(this.driverId)) {
      this.driverFormData = this.driversQuery.getEntity(this.driverId);
      return;
    }

    this.driversService
      .getDriverById(this.driverId)
      .subscribe((driver: Driver) => (this.driverFormData = driver));
  }
}
