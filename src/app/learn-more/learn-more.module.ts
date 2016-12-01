import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnMoreComponent } from './learn-more.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LearnMoreComponent],
  exports:[LearnMoreComponent]
})
export class LearnMoreModule { }
