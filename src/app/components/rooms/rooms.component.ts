import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {analyticsPackageSafelist} from '@angular/cli/models/analytics';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  chatRooms: any = [];
  filteredRooms: any = [];

  constructor(public storageService: StorageService) {
  }

  async ngOnInit() {
    await this.storageService.getData();
    this.chatRooms = this.storageService.getAllChats();
    this.storageService.currentChatSubject.next(this.storageService.getCurrentChat(this.chatRooms[0].id));
    // this.storageService.currentChatSubject.next(this.storageService.getCurrentChat(1));

    this.storageService.filterChatsSubject.subscribe(searchValue => {
      this.filteredRooms = this.chatRooms.filter(item => {
        return item.addressedPerson.toLowerCase().includes(searchValue.toLowerCase());
      });
    });
  }

  selectChat(id: number) {
    this.storageService.currentChatSubject.next(this.storageService.getCurrentChat(id));
  }

}
