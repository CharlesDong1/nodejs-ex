import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MessageComponent} from './message.component';

@NgModule({
  declarations: [
      MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MessageComponent
  ],
  providers: [],
})
export class MessageModule { }
