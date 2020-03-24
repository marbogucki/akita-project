import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Driver, DriverApiResponse } from '@app/feature/drivers/models/driver';

@Component({
  selector: 'app-drivers-form',
  templateUrl: './drivers-form.component.html',
  styleUrls: ['./drivers-form.component.scss']
})
export class DriversFormComponent {
  @Input() set driverFormData(driverFormData: Partial<Driver>) {
    this.fillDriverForm(driverFormData);
  }
  @Output() driverFormOnSubmit: EventEmitter<Partial<DriverApiResponse>> = new EventEmitter<Partial<DriverApiResponse>>();
  driverForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.driverForm = this.createDriverForm();
  }

  public onSubmitDriver(): void {
    const driverForm: Partial<Driver> = this.driverForm.value;
    const { fullName, email, street, city, postalCode }: Partial<Driver> = driverForm;
    const driverValue: Partial<DriverApiResponse> = { name: fullName, email, address: { city, street, zipcode: postalCode } };

    this.driverFormOnSubmit.emit(driverValue);
  }

  private fillDriverForm(driverFormData: Partial<Driver>): void {
    if (driverFormData) {
      this.driverForm.patchValue(driverFormData);
    }
  }

  private createDriverForm(): FormGroup {
    return this.fb.group({
      fullName: [''],
      email: [''],
      street: [''],
      city: [''],
      postalCode: ['']
    });
  }
}
