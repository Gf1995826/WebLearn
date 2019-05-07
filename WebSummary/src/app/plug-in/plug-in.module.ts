import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlugInComponent } from './plug-in.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    PlugInComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class PlugInModule { }
