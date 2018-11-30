import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent,
    BasicScrollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
