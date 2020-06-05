import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {InputBarComponent} from './input-bar/input-bar.component';
import {CustomPipePipe} from './custom-pipe.pipe';
import {ColorDirDirective} from './color-dir.directive';
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputBarComponent,
    CustomPipePipe,
    ColorDirDirective,
    FormComponent,
    UserComponent,
    AdminComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
