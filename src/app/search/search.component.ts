import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('someInput') someInput: ElementRef;
  
  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
    
  }

  search() {
    this.storageService.filterChatsSubject.next(this.someInput.nativeElement.value);
    // ;
  }

}
