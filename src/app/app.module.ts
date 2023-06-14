import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerItemComponent } from './components/server-item/server-item.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerItemComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
