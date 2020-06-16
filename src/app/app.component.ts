import { Component, OnInit, EventEmitter } from '@angular/core';
import { ISlimScrollOptions, SlimScrollState, ISlimScrollState, SlimScrollEvent } from 'ngx-slimscroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  options: ISlimScrollOptions;
  secondOptions: ISlimScrollOptions;
  enableScroll = true;
  slimScrollState = new SlimScrollState();
  slimscrollEvents = new EventEmitter<SlimScrollEvent>();

  constructor() {
    this.options = {
      barBackground: '#3E3F42',
      gridBackground: '#EFF1F5',
      barBorderRadius: '10',
      barWidth: '8',
      gridWidth: '4',
      alwaysVisible: true
    };
  }

  ngOnInit(): void {
    Promise.resolve()
      .then(() => this.timeout(1000))
      .then(() => {
        const ev = new SlimScrollEvent({
          type: 'scrollTo',
          y: 1000,
          duration: 1000,
          easing: 'inOutQuart'
        });
        this.slimscrollEvents.emit(ev);
      });
  }

  scrollChanged($event: ISlimScrollState) {
    this.slimScrollState = $event;
  }

  timeout(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  }
}
