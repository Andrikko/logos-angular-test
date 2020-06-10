import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  conversations = [
    {
      addressedPerson: 'Oleg',
      icon: '',
      messages: [
        {
          message: ['Hi'],
          owner: 'Oleg',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Hi, what are you doing?'],
          owner: 'Ivan',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Fine, what about you?'],
          owner: 'Oleg',
          icon: '',
          data: '06/06',
          time: '18:00'
        }
      ]
    },
    {
      addressedPerson: 'Petro',
      icon: '',
      messages: [
        {
          message: ['Hi', 'how are you?'],
          owner: 'Petro',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Hi, what are you doing?'],
          owner: 'Oleg',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Fine, what about you?'],
          owner: 'Petro',
          icon: '',
          data: '06/06',
          time: '18:00'
        }
      ]
    },
    {
      addressedPerson: 'Petro',
      icon: '',
      messages: [
        {
          message: ['Hi', 'how are you?'],
          owner: 'Petro',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Hi, what are you doing?'],
          owner: 'Oleg',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Fine, what about you?'],
          owner: 'Petro',
          icon: '',
          data: '06/06',
          time: '18:00'
        }
      ]
    }
  ];


  constructor() {
  }

  getAllChats() {
    return this.conversations.map(item => {
      return {
        addressedPerson: item.messages[item.messages.length - 1].owner,
        icon: item.icon,
        message: item.messages[item.messages.length - 1].message[item.messages[item.messages.length - 1].message.length - 1],
        time: item.messages[item.messages.length - 1].data + ' ' + item.messages[item.messages.length - 1].time
      };
    });
  }

}
