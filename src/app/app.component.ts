import { Component } from '@angular/core';
import {StorageService} from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-project';
  
  constructor(public storageService: StorageService) {
    this.storageService.getData();
  }
}
