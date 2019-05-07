import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// i18n
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ShareModule } from './share/share.module';
import { BasicComponent } from './basic/basic.component';
import { FrameworkComponent } from './framework/framework.component';
import { PlugInComponent } from './plug-in/plug-in.component';
import { PracticeComponent } from './practice/practice.component';
import { BasicModule } from './basic/basic.module';
import { FrameworkModule } from './framework/framework.module';
import { PlugInModule } from './plug-in/plug-in.module';
import { PracticeModule } from './practice/practice.module';

// i18n (1)
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BasicModule,
    FrameworkModule,
    PlugInModule,
    PracticeModule,
    ShareModule,
    // i18n (2)
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


