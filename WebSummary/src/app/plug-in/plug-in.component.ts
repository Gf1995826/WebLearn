import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-plug-in',
  template: `
  <web-share [items]='items'></web-share>
  `,
})
export class PlugInComponent implements OnInit {
  items: any = [{
    link: '',
    name: 'BootStramp'
  },
  {
    link: '',
    name: 'Ngx-bootstramp'
  },
  {
    link: '',
    name: 'Nebular'
  },
  {
    link: '',
    name: 'Echarts'
  }]
  constructor() { }

  ngOnInit() {
  }

}
