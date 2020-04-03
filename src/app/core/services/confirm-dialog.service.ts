import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { DataConfirmDialog } from '@app/core/models/confirm-dialog';

@Injectable()
export class ConfirmDialogService {
  constructor(public matDialogRef: MatDialog) {}

  showDialog<T>(data: DataConfirmDialog<T>): Observable<unknown> {
    const { title, btnActionInfo, item }: DataConfirmDialog<T> = data;

    return this.matDialogRef
      .open(ConfirmDialogComponent, {
        disableClose: false,
        id: 'confirm-dialog',
        data: {
          title,
          btnActionInfo,
          item,
        },
      })
      .afterClosed();
  }
}
