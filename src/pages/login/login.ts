import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  Events,
  ToastController
} from 'ionic-angular';
import { BackendApiProvider } from '../../providers/backend-api/backend-api';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: string;
  password: string;
  isConnected: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: BackendApiProvider,
    public events: Events,
    public toastCtrl: ToastController
  ) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.clearStorage();
  }

  login() {
    if (!this.username || !this.password) {
      this.presentToast('Please Fill All Fields', 'bottem');
      return;
    }
    this.loginRequest();
  }

  loginRequest() {
    this.api.login(this.username, this.password).subscribe(
      data => {
        if (data.success === true) {
          localStorage.setItem('username', this.username);
          localStorage.setItem('password', this.password);
          this.events.publish('Login:success');
        } else if (data.err) {
          err => {
            this.presentToast(data.err, 'bottem');
          };
        }
      },
      err => {
        this.presentToast('Please Check Your Network Connection', 'middle');
      }
    );
  }

  presentToast(msg: string, position: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: position,
      dismissOnPageChange: true
    });
    toast.present();
  }

  clearStorage() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('user');
    localStorage.removeItem('chats');
  }
}
