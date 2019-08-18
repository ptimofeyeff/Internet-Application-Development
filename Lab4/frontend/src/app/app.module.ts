import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
