import { Component } from '@angular/core';
import { NavController, App, Events } from 'ionic-angular';
import { BackendApiProvider } from '../../providers/backend-api/backend-api';
import { Chat } from '../../providers/backend-api/chat';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chats: Chat[];
  user: string;
  unread: number;

  constructor(
    public navCtrl: NavController,
    private api: BackendApiProvider,
    private app: App,
    public events: Events
  ) {
    if (localStorage.getItem('chats') != null) {
      try {
        this.chats = JSON.parse(localStorage.getItem('chats'));
        this.user = JSON.parse(localStorage.getItem('user'));
      } catch (err) {}
      this.refreshChats();
    } else {
      this.refreshChats();
    }
  }
  refreshChats() {
    this.api.getAllChats().subscribe(data => {
      if (data.chats === this.chats) {
      } else {
        if (localStorage.getItem('username') != null) {
          localStorage.setItem('chats', JSON.stringify(data.chats));
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        this.chats = data.chats;
        this.user = data.user;
      }
    });
    this.subscribe();
  }
  subscribe() {
    setTimeout(() => {
      if (localStorage.getItem('username')) {
        this.refreshChats();
      }
    }, 1500);
  }
  openChat(uuid: string) {
    console.log('in check1');
    this.api.getChat(uuid).subscribe(
      data => {
        this.app
          .getRootNav()
          .push(ChatPage, { chat: data.chat, chatName: data.chatName });
      },
      err => {
        let chat = JSON.parse(localStorage.getItem('chats')).filter(
          chatItem => {
            return chatItem.uuid === uuid;
          }
        );
        console.log(JSON.stringify(chat));
        let chatName =
          chat[0].usersUName[0] === localStorage.getItem('username')
            ? chat[0].usersUName[1]
            : chat[0].usersUName[0];
        this.app
          .getRootNav()
          .push(ChatPage, { chat: chat[0], chatName: chatName });
      }
    );
  }
  logout() {
    this.api.logout().subscribe(data => {
      console.log(data);
      if (data.success) {
        this.clearStorage();
        this.events.publish('Logout:success');
      }
    });
  }
  clearStorage() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('user');
    localStorage.removeItem('chats');
  }
}
