import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../services/storage.service';

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

  sendMessage() {
    // console.log(this.input.nativeElement.value);
    // console.log(this.chatInfo);

    let newMessage = {
      data: "Jun 12",
      icon: "",
      owner: "Ivan",
      message: [],
      time: "23:12"
    };
    newMessage.message.push(this.input.nativeElement.value);
    this.chatInfo.messages.push(newMessage);

    // data: "Jun 12"
    // icon: ""
    // message: ["Hi!"]
    // owner: "Oleg"
    // time: "12:51"
  }

}
