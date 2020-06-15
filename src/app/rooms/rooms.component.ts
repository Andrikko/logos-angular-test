import {Component, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  chatRooms: any = [];

  constructor(public storageService: StorageService) {
  }

  ngOnInit(): void {
    this.chatRooms = this.storageService.getAllChats();
    this.storageService.currentChatSubject.next(this.storageService.getCurrentChat(0));
  }

  selectChat(index: number) {
    this.storageService.getCurrentChat(index);
    this.storageService.currentChatSubject.next(this.storageService.getCurrentChat(index));
  }

}
