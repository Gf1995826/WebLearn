import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-practice',
  template:`
  <web-share [items]='items'></web-share>
  `,
})
export class PracticeComponent implements OnInit {
  items: any = [{
    link: '',
    name: '国际化'
  },
  {
    link: '',
    name: 'Echarts'
  },
  {
    link: '',
    name: '按钮调节'
  },
  {
    link: '',
    name: '整体样式'
  }]
  constructor() { }

  ngOnInit() {
  }

}
