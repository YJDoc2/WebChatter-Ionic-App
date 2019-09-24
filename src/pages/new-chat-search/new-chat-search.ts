import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  ToastController
} from 'ionic-angular';
import { BackendApiProvider } from '../../providers/backend-api/backend-api';
import { User } from '../../providers/backend-api/User';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../providers/backend-api/post';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the NewChatSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-chat-search',
  templateUrl: 'new-chat-search.html'
})
export class NewChatSearchPage {
  searchid: string;
  searchRes: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: BackendApiProvider,
    public app: App,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewChatSearchPage');
  }

  search() {
    if (this.searchid != '') {
      this.api.searchUsers(this.searchid).subscribe(
        data => {
          this.searchRes = data;
        },
        err => {
          let toast = this.toastCtrl.create({
            message: 'Please Check Your Network Connection',
            duration: 1500,
            position: 'middle',
            dismissOnPageChange: true
          });
          toast.present();
        }
      );
    } else if (this.searchid === '') {
      this.searchRes = [];
    }
  }
  openChat(name: string, uuid: string) {
    this.searchRes = [];
    this.searchid = '';
    this.app.getRootNav().push(ChatPage, { chatName: name, uuid: uuid });
  }
}
