import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES: unknown[] = [MatDialogModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
})
export class MaterialModule {}
