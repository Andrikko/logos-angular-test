import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { SearchComponent } from './search/search.component';
import { ChatStyleDirective } from './directives/chat-style.directive';
import { CutMessageDirective } from './directives/cut-message.directive';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
