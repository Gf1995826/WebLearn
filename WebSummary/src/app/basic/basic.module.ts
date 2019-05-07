import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { ShareModule } from '../share/share.module';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { ScssComponent } from './scss/scss.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { JqueryComponent } from './jquery/jquery.component';

@NgModule({
  declarations: [
    BasicComponent,
    HtmlComponent,
    CssComponent,
    ScssComponent,
    JavascriptComponent,
    TypescriptComponent,
    JqueryComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class BasicModule { }
