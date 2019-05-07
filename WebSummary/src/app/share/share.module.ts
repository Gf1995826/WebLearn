import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    ShareComponent,
    NgbModule
  ]
})
export class ShareModule { }
