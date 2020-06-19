import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as helpers from '../helpers/contants';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  conversations: any = [];
  headers: any;

  public currentChatSubject = new BehaviorSubject<any>(null);
  public filterChatsSubject = new BehaviorSubject<string>('');
  public updateCurrentChatInfo = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    this.headers.append('Access-Control-Allow-Credentials', 'true');
  }

  async getData() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    await fetch('http://localhost:3000/users', {
      headers
    })
      .then(data => data.json())
      .then(data => {
        this.conversations = data.conversations;
      })
      .catch(err => console.error(err));
  }

  updateData(data) {
    this.conversations = [...data];
  }

  getAllChats() {
    return this.conversations.map(item => {
      return {
        // addressedPerson: item.messages[item.messages.length - 1].owner,
        id: item.id,
        addressedPerson: item.addressedPerson,
        icon: item.icon,
        message: item.messages[item.messages.length - 1].message[item.messages[item.messages.length - 1].message.length - 1],
        time: item.messages[item.messages.length - 1].data + ' ' + item.messages[item.messages.length - 1].time
      };
    });
  }

  getCurrentChat(id: number): any {
    return this.conversations.filter(chat => chat.id === id)[0];
  }

  async getRandomAnswer() {
    return new Promise((resolve, reject) => {
      fetch('https://api.chucknorris.io/jokes/random').then(data => data.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  async sendMessage(messageData: any) {
    return new Promise((resolve, reject) => {
      fetch(helpers.default.host + 'users', {
        body: JSON.stringify(messageData),
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });

  }


}
