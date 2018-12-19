import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AzbTabSetComponent } from './azb-tabset.component';
import { AzbTab, AzbTabTitle, AzbTabContent } from './azb-tab';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AzbTab,
    AzbTabTitle,
    AzbTabContent,
    AzbTabSetComponent
  ],
  exports: [
    AzbTab,
    AzbTabTitle,
    AzbTabContent,
    AzbTabSetComponent
  ]
})
export class AzbTabSetModule {
  
}
