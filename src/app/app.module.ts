import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ColorDirDirective } from './color-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputBarComponent,
    CustomPipePipe,
    ColorDirDirective
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
