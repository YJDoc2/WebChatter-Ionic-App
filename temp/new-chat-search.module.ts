import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewChatSearchPage } from './new-chat-search';

@NgModule({
  declarations: [
    NewChatSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(NewChatSearchPage),
  ],
})
export class NewChatSearchPageModule {}
