import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { PlugInComponent } from './plug-in/plug-in.component';
import { FrameworkComponent } from './framework/framework.component';
import { BasicComponent } from './basic/basic.component';
import { HtmlComponent } from './basic/html/html.component';
import { CssComponent } from './basic/css/css.component';
import { ScssComponent } from './basic/scss/scss.component';
import { JavascriptComponent } from './basic/javascript/javascript.component';
import { TypescriptComponent } from './basic/typescript/typescript.component';
import { JqueryComponent } from './basic/jquery/jquery.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
    children: [
      {
        path: 'html',
        component: HtmlComponent,
      },
      {
        path: 'css',
        component: CssComponent,
      },
      {
        path: 'scss',
        component: ScssComponent,
      },
      {
        path: 'javaScript',
        component: JavascriptComponent,
      },
      {
        path: 'typeScript',
        component: TypescriptComponent,
      },
      {
        path: 'jquery',
        component: JqueryComponent,
      },
      {
        path: '',
        redirectTo: 'html',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'framework',
    component: FrameworkComponent
  },
  {
    path: 'plugIn',
    component: PlugInComponent
  },
  {
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
