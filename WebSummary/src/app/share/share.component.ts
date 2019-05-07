import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'web-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  @Input()
  items: any;
  constructor() { }

  ngOnInit() {
  }

}
