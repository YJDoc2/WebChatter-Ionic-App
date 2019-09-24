import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from './User';
import { AllChatRes } from './allChatRes';
import { SingleChatRes } from './singleChatRes';
import { Res } from './response';
import { Chat } from './chat';
import { Events } from 'ionic-angular';

/*
  Generated class for the BackendApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class BackendApiProvider {
  baseUrl = 'https://web-chatter-app-api.herokuapp.com';
  //baseUrl = 'http://localhost:3000';
  chat: Chat;

  constructor(public http: HttpClient, public events: Events) {
    console.log('Hello BackendApiProvider Provider');
  }
  login(username: string, password: string) {
    return this.http.post<Res>(
      this.baseUrl + '/users/login',
      {
        username: username,
        password: password
      },
      {
        withCredentials: true
      }
    );
  }
  signup(
    name: string,
    email: string,
    username: string,
    password: string,
    password2: string
  ) {
    return this.http.post<Res>(
      this.baseUrl + '/users/register',
      {
        name: name,
        email: email,
        username: username,
        password: password,
        password2: password2
      },
      {
        withCredentials: true
      }
    );
  }

  logout() {
    return this.http.get<Res>(this.baseUrl + '/users/logout', {
      withCredentials: true
    });
  }

  searchUsers(regex: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/api/search/' + regex, {
      withCredentials: true
    });
  }
  getAllChats() {
    return this.http.get<AllChatRes>(this.baseUrl + '/api/refreshHomeChats', {
      withCredentials: true
    });
  }
  getChat(uuid: string) {
    return this.http.get<SingleChatRes>(this.baseUrl + '/api/getChat/' + uuid, {
      withCredentials: true
    });
  }
  sendMsg(uuid: string, msg: string) {
    return this.http.post<Res>(
      this.baseUrl + '/api/chatAddMsg',
      {
        id: uuid,
        msg: msg
      },
      {
        withCredentials: true
      }
    );
  }
  newChat(otherUser: string, uuid: string, msg: string) {
    return this.http.post<Res>(
      this.baseUrl + '/api/newChat',
      {
        otherUuid: uuid,
        otherUserName: otherUser,
        msg: msg
      },
      { withCredentials: true }
    );
  }
}
