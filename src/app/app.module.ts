import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AzbTabSetModule } from './azb-tabset/azb-tabset.module';


@NgModule({
  declarations: [
    AppComponent,
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
