import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { SearchComponent } from './search/search.component';
import { ChatStyleDirective } from './chat-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    RoomsComponent,
    ChatRoomComponent,
    SearchComponent,
    ChatStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
