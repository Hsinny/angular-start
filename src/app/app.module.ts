import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 從 @angular/forms 匯入 FormsModule 物件
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // 將 FormsModule import 到 NgModule 內
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
