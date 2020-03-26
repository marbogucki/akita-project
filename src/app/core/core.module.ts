import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CORE_MODULE_INTERCEPTORS } from '@app/core/core.module.interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CORE_MODULE_INTERCEPTORS],
})
export class CoreModule {}
