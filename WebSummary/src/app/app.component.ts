import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showFirstPage: boolean = true
  currentLanguage: string = 'zh'
  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.translate.addLangs(['zh', 'en'])
    this.currentLanguage = sessionStorage.getItem('currentLanguage') == null ? 'zh' : sessionStorage.getItem('currentLanguage')
    this.translate.use(this.currentLanguage);
  }

  changeLang(lang: string) {
    this.currentLanguage = lang
    this.translate.use(this.currentLanguage);
    sessionStorage.setItem('currentLanguage', this.currentLanguage)
  }

}
