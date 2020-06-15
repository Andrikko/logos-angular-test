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
    if(this.chatInfo.message.length > 22){
      this.message = this.cutMessage();
    }

  }

  cutMessage(){
  let newMessage = this.message.slice(0, 22) + '...';
  return newMessage;
}

}
