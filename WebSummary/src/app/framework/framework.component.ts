import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework',
  template: `
  <web-share [items]='items'></web-share>
  `,
})
export class FrameworkComponent implements OnInit {
  items: any = [{
    link: '',
    name: 'Angular7'
  },
  {
    link: '',
    name: 'AVE'
  }]
  constructor() { }

  ngOnInit() {
  }

}
