import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    PracticeComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class PracticeModule { }
