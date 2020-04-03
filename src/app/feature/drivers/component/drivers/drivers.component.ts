import { Component, OnInit } from '@angular/core';
import { Driver } from '@app/feature/drivers/models/driver';
import { Observable } from 'rxjs';
import { DriversQuery } from '@app/feature/drivers/state/drivers.query';
import { DriversService } from '@app/feature/drivers/state/drivers.service';
import { ConfirmDialogService } from '@app/core/services/confirm-dialog.service';
import { DataConfirmDialog } from '@app/core/models/confirm-dialog';

@Component({
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  public drivers$: Observable<Driver[]> = this.driversQuery.selectAll();

  constructor(
    private driversService: DriversService,
    private driversQuery: DriversQuery,
    private confirmDialog: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.driversService.getDrivers().subscribe();
  }

  removeDriver(driver: Driver) {
    const dataConfirmDialog: DataConfirmDialog<number> = {
      title: 'Are you sure you want to remove driver ?',
      btnActionInfo: 'Remove',
      item: driver.id,
    };

    this.confirmDialog
      .showDialog<number>(dataConfirmDialog)
      .subscribe(result => {
        console.log(result);
      });

    // this.driversService
    //   .removeDrivers(driver)
    //   .subscribe(response => console.log(response));
  }

  saveDriver(driver: Driver) {
    const dataConfirmDialog: DataConfirmDialog<Driver> = {
      title: 'Are you sure you want to Save driver ?',
      btnActionInfo: 'Accept',
      item: driver,
    };

    this.confirmDialog
      .showDialog<Driver>(dataConfirmDialog)
      .subscribe(result => {
        console.log(result);
      });
  }
}
