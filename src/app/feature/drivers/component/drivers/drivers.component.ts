import { Component, OnInit } from "@angular/core";
import { Driver } from "@app/feature/drivers/models/driver";
import { Observable } from "rxjs";
import { DriversQuery } from "@app/feature/drivers/state/drivers.query";
import { DriversService } from "@app/feature/drivers/state/drivers.service";

@Component({
  templateUrl: "./drivers.component.html",
  styleUrls: ["./drivers.component.scss"],
})
export class DriversComponent implements OnInit {
  public drivers$: Observable<Driver[]> = this.driversQuery.selectAll();

  constructor(
    private driversService: DriversService,
    private driversQuery: DriversQuery
  ) {}

  ngOnInit(): void {
    this.driversService.getDrivers().subscribe();
  }

  removeDriver(driver: Driver) {
    this.driversService
      .removeDrivers(driver)
      .subscribe((response) => console.log(response));
  }
}
