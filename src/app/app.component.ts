import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { InitialEntryTabsPage } from '../pages/initial-entry-tabs/initial-entry-tabs';

@Component({
  templateUrl: 'app.html'
})
export class WebChatter {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public events: Events
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.isLoggedIn()) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = InitialEntryTabsPage;
      }
      events.subscribe('Login:success', () => {
        this.rootPage = TabsPage;
      });
      events.subscribe('Logout:success', () => {
        this.rootPage = InitialEntryTabsPage;
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  isLoggedIn() {
    if (localStorage.getItem('username') != null) {
      return true;
    } else {
      return false;
    }
  }
}
