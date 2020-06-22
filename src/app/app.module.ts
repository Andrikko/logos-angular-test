import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { SearchComponent } from './components/search/search.component';
import { ChatStyleDirective } from './directives/chat-style.directive';
import { CutMessageDirective } from './directives/cut-message.directive';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    RoomsComponent,
    ChatRoomComponent,
    SearchComponent,
    ChatStyleDirective,
    CutMessageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
