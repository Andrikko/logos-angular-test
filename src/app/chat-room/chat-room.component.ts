import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {


  @Input() chatInfo: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.chatInfo);

  }

}
