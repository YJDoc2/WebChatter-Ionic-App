import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { InfoPage } from '../info/info';

/**
 * Generated class for the InitialEntryTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initial-entry-tabs',
  templateUrl: 'initial-entry-tabs.html'
})
export class InitialEntryTabsPage {
  loginRoot = LoginPage;
  signupRoot = SignupPage;
  infoRoot = InfoPage;

  constructor(public navCtrl: NavController) {}
}
