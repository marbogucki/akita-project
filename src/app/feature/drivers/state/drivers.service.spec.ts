import { async, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from "@angular/common/http/testing";
import { DriversService } from "./drivers.service";
import { Driver, DriverApiResponse } from "@app/feature/drivers/models/driver";
import { DriversStore } from "@app/feature/drivers/state/drivers.store";
import { ApiMethods } from "@app/core/models/api-methods";

describe("DriversService", () => {
  let driversService: DriversService;
  let driversStore: DriversStore;
  let httpTestingController: HttpTestingController;
  let driversMock: Partial<DriverApiResponse>[];
  const driversApiUrl = "drivers";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    driversService = TestBed.inject(DriversService);
    driversStore = TestBed.inject(DriversStore);
    httpTestingController = TestBed.inject(HttpTestingController);

    driversMock = [
      { id: 4, name: "Jan Kowalski" },
      { id: 9, name: "Aleksandra Wojciechowska" },
    ];
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(driversService).toBeTruthy();
  });

  it("should fetch drivers", async(() => {
    spyOn(driversStore, "set").and.callThrough();

    driversService.getDrivers().subscribe((drivers: Partial<Driver>[]) => {
      expect(drivers.length).toBe(2);
      expect(drivers[1].fullName).toEqual("Aleksandra Wojciechowska");
      expect(driversStore.set).toHaveBeenCalledTimes(1);
    });

    const req: TestRequest = httpTestingController.expectOne(driversApiUrl);
    expect(req.request.method).toBe(ApiMethods.GET);
    req.flush(driversMock);
  }));

  it("should add driver", async(() => {
    const driverMock: Partial<DriverApiResponse> = {
      id: 15,
      name: "Iwona Michalska",
    };

    spyOn(driversStore, "add").and.callThrough();
    driversService.addDriver(driverMock as Driver).subscribe(() => {
      expect(driverMock.id).toEqual(15);
      expect(driversStore.add).toHaveBeenCalledTimes(1);
    });

    const req: TestRequest = httpTestingController.expectOne(driversApiUrl);
    expect(req.request.method).toBe(ApiMethods.POST);
    req.flush(driversMock);
  }));

  it("should remove driver", async(() => {
    spyOn(driversStore, "remove").and.callThrough();
    driversService.removeDrivers(driversMock[1] as Driver).subscribe(() => {
      expect(driversMock[1].id).toEqual(9);
      expect(driversStore.remove).toHaveBeenCalledTimes(1);
    });

    const req: TestRequest = httpTestingController.expectOne(
      `${driversApiUrl}/9`
    );
    expect(req.request.method).toBe(ApiMethods.DELETE);
    req.flush(driversMock);
  }));
});
