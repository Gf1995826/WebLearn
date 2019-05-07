import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { AppRoutingModule } from '../app-routing.module';
import { MainTemplateComponent } from './main-template/main-template.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ShareComponent, MainTemplateComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    ShareComponent,
    MainTemplateComponent,
    NgbModule
  ]
})
export class ShareModule { }
