import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AzbTab, AzbTabTitle, AzbTabContent } from './azb-tabset/azb-tab';
import { AzbTabSetModule } from './azb-tabset/azb-tabset.module';


@NgModule({
  declarations: [
    AppComponent,

    AzbTab,
    AzbTabTitle,
    AzbTabContent,
  ],
  imports: [
    BrowserModule,
    AzbTabSetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
