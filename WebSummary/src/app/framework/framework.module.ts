import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkComponent } from './framework.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    FrameworkComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class FrameworkModule { }
