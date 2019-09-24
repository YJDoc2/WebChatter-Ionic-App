import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NewChatSearchPage } from '../new-chat-search/new-chat-search';
import { NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = NewChatSearchPage;
  tab2Root = HomePage;
  tab3Root = InfoPage;

  constructor(public navParams: NavParams) {}
}
