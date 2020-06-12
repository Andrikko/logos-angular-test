import {Component, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatInfo: any = null;

  constructor(public storageService: StorageService) {
  }

  ngOnInit(): void {
    this.storageService.currentChatSubject.subscribe(data => {
      this.chatInfo = data;
    });
  }

}
