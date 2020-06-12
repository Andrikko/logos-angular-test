import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {


  @Input() chatInfo: any;

  constructor(public storageService: StorageService) {
  }

  ngOnInit(): void {

  }

}
