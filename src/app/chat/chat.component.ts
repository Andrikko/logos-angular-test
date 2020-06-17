import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../services/storage.service';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  chatInfo: any = null;

  @ViewChild('input') input: ElementRef;
  @ViewChild('scrollMe') scrollMe: ElementRef;

  constructor(public storageService: StorageService) {
  }

  ngOnInit(): void {
    this.storageService.currentChatSubject.subscribe(data => {
      this.chatInfo = data;
    });
  }

  ngAfterViewChecked() {
    this.scrollMe.nativeElement.scrollTo(0, this.scrollMe.nativeElement.scrollHeight);
  }

  async sendMessage() {
    const newMessage = {
      data: 'Jun 12',
      icon: '',
      owner: 'Ivan',
      message: [],
      time: '23:12'
    };
    newMessage.message.push(this.input.nativeElement.value);
    this.chatInfo.messages.push(newMessage);
    this.input.nativeElement.value = '';

    const answer = {message: [], data: null, icon: null, owner: this.chatInfo.addressedPerson, time: null};
    answer.data = moment().format('MMM DD');
    answer.icon = '';
    answer.time = new Date().getHours() + ':' + new Date().getMinutes();
    await this.storageService.getRandomAnswer()
      .then(data => {
        answer.message.push(data['value']);
        this.chatInfo.messages.push(answer);

        this.storageService.updateCurrentChatInfo.next({answer, id: this.chatInfo.id});
      })
      .catch(err => console.error(err));
  }

}
