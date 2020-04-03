import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataConfirmDialog } from '@app/core/models/confirm-dialog';

@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent<T> {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: Partial<DataConfirmDialog<T>>
  ) {}

  onCancel() {
    this.dialogRef.close();
  }
}
