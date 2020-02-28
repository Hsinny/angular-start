import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  // encapsulation: ViewEncapsulation.None  // 讓 style 檔案不要進行封裝，該 style 會渲染到其他 component
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
