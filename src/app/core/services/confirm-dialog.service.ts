import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  ConfirmDialogComponent,
  DataDialog,
} from '@app/shared/components/confirm-dialog/confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {
  constructor(public matDialogRef: MatDialog) {}

  showDialog(data: DataDialog): Observable<unknown> {
    return this.matDialogRef
      .open(ConfirmDialogComponent, {
        disableClose: false,
        id: 'confirm-dialog',
        data: {
          title: data.title,
          btnActionInfo: data.btnActionInfo,
          item: data.item,
        },
      })
      .afterClosed();
  }
}
