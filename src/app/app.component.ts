import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'The Will Will Web';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  thirdTitle = '記載著 Will 在網路世界的學習心得與技術分享';
  url = 'http://blog.miniasp.com/';
  fbUrl = 'https://www.facebook.com/will.fans';
  fbTitle = 'Will 保哥的技術交流中心';
  class = 'link';
  constructor() {
    setTimeout(() => {
      this.title = 'New Title';
    }, 3000);

    // 無效原因？
    setTimeout(function() {
      this.title = 'Second Title';
    }, 4000);
  }
  changeEventTitle() {
    this.subtitle = 'Event Title 1';
  }
  changeEvnetSubtitle() {
    this.thirdTitle = 'Event Title 2';
  }

  // 事件繫結，傳入 $event 參數
  changeEventThirdTitle($event) {
    if ($event.altKey) {
      this.thirdTitle = 'Event Title 3';
    }
  }

  // 事件繫結，傳入帶有型別的 $event 參數
  changeEventFourthTitle($event: MouseEvent) {
    if ($event.altKey) {
      this.thirdTitle = 'Event Title 4';
    }
  }

  // 事件繫結，傳入帶有型別的參數
  changeEventFivthTitle(altKey: boolean) {
    if (altKey) {
      this.thirdTitle = 'Event Title 5';
    }
  }
}
