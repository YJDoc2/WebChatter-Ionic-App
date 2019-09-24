import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { WebChatter } from './app.component';

import { AboutPage } from '../pages/about/about';
import { InfoPage } from '../pages/info/info';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewChatSearchPage } from '../pages/new-chat-search/new-chat-search';
import { InitialEntryTabsPage } from '../pages/initial-entry-tabs/initial-entry-tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackendApiProvider } from '../providers/backend-api/backend-api';
import { HttpClientModule } from '@angular/common/http';
import { ChatPage } from '../pages/chat/chat';

@NgModule({
  declarations: [
    WebChatter,
    AboutPage,
    InfoPage,
    HomePage,
    TabsPage,
    NewChatSearchPage,
    InitialEntryTabsPage,
    LoginPage,
    SignupPage,
    ChatPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(WebChatter), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [
    WebChatter,
    AboutPage,
    InfoPage,
    HomePage,
    TabsPage,
    NewChatSearchPage,
    InitialEntryTabsPage,
    LoginPage,
    SignupPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BackendApiProvider
  ]
})
export class AppModule {}
