import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
  <web-share [items]='items'></web-share>
  `,
})
export class BasicComponent implements OnInit {

  items: any = [
    {
      link: '/basic/html',
      name: 'HTML'
    },
    {
      link: '/basic/css',
      name: 'CSS'
    },{
      link: '/basic/scss',
      name: 'SCSS'
    },
    {
      link: '/basic/javaScript',
      name: 'Java Script'
    },
    {
      link: '/basic/typeScript',
      name: 'TypeScript'
    },
    {
      link: '/basic/jquery',
      name: 'JQuery'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
