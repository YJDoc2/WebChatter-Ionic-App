import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Content,
  Events,
  ToastController
} from 'ionic-angular';
import { Chat } from '../../providers/backend-api/chat';
import { BackendApiProvider } from '../../providers/backend-api/backend-api';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  chat: Chat;
  chatName: string;
  msg: string;
  isNewChat: boolean = false;
  @ViewChild('chatScroll') private content: Content;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: BackendApiProvider,
    public events: Events,
    public toastCtrl: ToastController
  ) {
    if (navParams.data.chat != null) {
      this.chat = navParams.data.chat;
    } else {
      this.isNewChat = true;
    }
    this.chatName = navParams.data.chatName;

    if (!this.isNewChat) {
      this.refreshChat();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  ionViewDidEnter() {
    if (!this.isNewChat) {
      if (this.content._scroll) this.content.scrollToBottom(300);
    }
  }

  refreshChat() {
    this.api.getChat(this.chat.uuid).subscribe(data => {
      if (this.chat.msgs.length != data.chat.msgs.length) {
        this.chat = data.chat;
        setTimeout(() => {
          if (this.content._scroll) this.content.scrollToBottom(300);
        }, 50);
      }
      if (this.content._scroll) {
        this.subscribe();
      }
    });
  }
  subscribe() {
    setTimeout(() => {
      this.refreshChat();
    }, 500);
  }

  rescroll() {
    console.log('c');
    setTimeout(() => {
      if (this.content._scroll) this.content.scrollToBottom(300);
    }, 10);
  }
  sendMsg() {
    if (this.msg != '') {
      if (this.chat == null) {
        let otherUser = this.navParams.data.chatName;
        let uuid = this.navParams.data.uuid;
        this.api.newChat(otherUser, uuid, this.msg).subscribe(
          data => {
            if (data.success) {
              this.chat = data.chat;
              this.isNewChat = false;
              this.msg = '';
              this.refreshChat();
            }
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
      } else {
        this.api.sendMsg(this.chat.uuid, this.msg).subscribe(
          data => {
            if (data.success == true) {
              this.msg = '';
            } else {
              let toast = this.toastCtrl.create({
                message: `Some Error Occured ${data.err}`,
                duration: 1500,
                position: 'middle',
                dismissOnPageChange: true
              });
              toast.present();
            }
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
      }
    }
  }
}
