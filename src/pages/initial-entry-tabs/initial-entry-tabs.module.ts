import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitialEntryTabsPage } from './initial-entry-tabs';

@NgModule({
  declarations: [
    InitialEntryTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(InitialEntryTabsPage),
  ]
})
export class InitialEntryTabsPageModule {}
