import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/serivces/http.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AddressApiResponse, Driver, DriverApiResponse } from '@app/feature/drivers/models/driver';
import { DriversStore } from '@app/feature/drivers/state/drivers.store';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  private readonly urlDrivers: string = 'drivers';

  constructor(private httpService: HttpService, private driversStore: DriversStore) {}

  public getDrivers(): Observable<Driver[]> {
    return this.httpService.get<DriverApiResponse[]>(this.urlDrivers).pipe(
      map((drivers: DriverApiResponse[]) => this.transformDrivers(drivers)),
      tap((drivers: Driver[]) => this.driversStore.set(drivers))
    );
  }

  public getDriverById(driverId: number): Observable<Driver> {
    return this.httpService.get<DriverApiResponse>(`${this.urlDrivers}/${driverId}`).pipe(
      map((driver: DriverApiResponse) => this.transformDriversItem(driver)),
      tap((driver: Driver) => this.driversStore.add(driver))
    );
  }

  public addDriver(driver: Partial<Driver>): Observable<Partial<Driver>> {
    return this.httpService.add<Partial<Driver>>(this.urlDrivers, driver).pipe(
      map((driverItem: DriverApiResponse) => this.transformDriversItem(driverItem)),
      tap((driverItem: Driver) => this.driversStore.add(driverItem))
    );
  }

  public updateDriver(driver: Partial<Driver>): Observable<Partial<Driver>> {
    return this.httpService.update<Partial<Driver>>(`${this.urlDrivers}/${driver.id}`, driver).pipe(
      map((driverItem: DriverApiResponse) => this.transformDriversItem(driverItem)),
      tap((driverItem: Driver) => this.driversStore.update(driverItem.id, driverItem))
    );
  }

  public removeDrivers(driver: Driver): Observable<Driver> {
    return this.httpService
      .remove<Driver>(`${this.urlDrivers}/${driver.id}`)
      .pipe(tap(() => this.driversStore.remove(driver.id)));
  }

  private transformDrivers(driver: DriverApiResponse[]): Driver[] {
    return driver.map((driverItem: DriverApiResponse) => this.transformDriversItem(driverItem));
  }

  private transformDriversItem(driver: DriverApiResponse): Driver {
    const {
      id,
      name: fullName,
      email = '',
      address: { street = '', city = '', zipcode: postalCode = '' } = {} as AddressApiResponse,
    }: DriverApiResponse = driver;

    return { id, fullName, email, street, city, postalCode };
  }
}
