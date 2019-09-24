import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  Events,
  ToastController
} from 'ionic-angular';
import { BackendApiProvider } from '../../providers/backend-api/backend-api';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  name: string;
  email: string;
  username: string;
  password: string;
  password2: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: BackendApiProvider,
    private events: Events,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    if (
      !this.name ||
      !this.email ||
      !this.username ||
      !this.password ||
      !this.password2
    ) {
      this.presentToast('Please Fill All Fields', 'bottem');
      return;
    } else if (this.password != this.password2) {
      this.presentToast('Password Do Not Match', 'bottem');
      return;
    } else {
      this.api
        .signup(
          this.name,
          this.email,
          this.username,
          this.password,
          this.password2
        )
        .subscribe(
          data => {
            if (!data.success) {
              this.presentToast(data.err, 'bottem');
            } else {
              this.api.login(this.username, this.password).subscribe(
                data => {
                  if (data.success === true) {
                    this.events.publish('Login:success');
                  } else if (data.err) {
                    this.presentToast(data.err, 'bottem');
                  }
                },
                err => {
                  this.presentToast(
                    'Please Check Your Network Connection',
                    'middle'
                  );
                }
              );
            }
          },
          err => {
            this.presentToast('Please Check Your Network Connection', 'middle');
          }
        );
    }
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
}
