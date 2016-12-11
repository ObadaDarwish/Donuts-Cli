import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CateringComponent } from './catering.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CateringComponent],
  exports:[CateringComponent]
})
export class CateringModule { }
