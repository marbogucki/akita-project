import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '@app/shared/material.module';
import { ConfirmDialogService } from '@app/core/services/confirm-dialog.service';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, TranslateModule, MaterialModule],
  exports: [TranslateModule, MaterialModule],
  providers: [ConfirmDialogService],
})
export class SharedModule {}
