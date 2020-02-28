import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor() {
  }

  wordsCount = 0;
  keyword = '';

  // 計算字數
  keywordChange(keyword: string) {
    this.wordsCount = keyword.length;
  }

  // 清空輸入
  keywordReset(input: HTMLInputElement ) {
    input.value = '';
    this.wordsCount = input.value.length;
  }

  // 使用雙向繫結清空輸入的文字
  keywordReset2() {
    this.keyword = '';
  }
}
