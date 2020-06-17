import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  @Input() chatInfo: any;
  message = '';

  constructor(public storageService: StorageService) {
  }

  ngOnInit(): void {
    this.message = this.chatInfo.message;
    if (this.chatInfo.message.length > 22) {
      this.message = this.cutMessage();
    }

    this.storageService.updateCurrentChatInfo.subscribe(data => {
      if (this.chatInfo.id === data.id) {
        this.message = data.answer.message[data.answer.message.length - 1];
        this.chatInfo.time = data.answer.data + ' ' + data.answer.time;
      }
    });
  }

  cutMessage() {
    return this.message.slice(0, 22) + '...';
  }

}
