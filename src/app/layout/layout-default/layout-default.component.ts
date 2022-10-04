import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html'
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  onCollapsed(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }
}
