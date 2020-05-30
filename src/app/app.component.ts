import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logos-angulat-test';
  valueAfterPush: any;
  valueAfterEdit: any;
  newValueAfterEdit: any;

  afterPush(obj) {
    this.valueAfterPush = obj;
  }

  afterEdit(obj) {
    this.newValueAfterEdit = obj;
  }

  edit(obj) {
    // obj
    this.valueAfterEdit = obj;
  }


}
