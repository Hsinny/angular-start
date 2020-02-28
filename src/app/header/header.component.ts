import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      this.title = 'New Title';
    }, 3000);

    // 無效原因？
    setTimeout(function() {
      this.title = 'Second Title';
    }, 4000);
   }

   title = 'The Will Will Web';
   subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
   thirdTitle = '記載著 Will 在網路世界的學習心得與技術分享';
   url = 'http://blog.miniasp.com/';
   fbUrl = 'https://www.facebook.com/will.fans';
   fbTitle = 'Will 保哥的技術交流中心';
   class = 'link';
   counter = 0;

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

  addCount() {
    this.counter ++;
  }

  getStyle() {
    return {
      'font-size': 12 + this.counter + 'px',
      color: 'orange'
    };
  }

  ngOnInit() {
  }

}
