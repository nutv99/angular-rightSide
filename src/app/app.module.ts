import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidePanelComponent } from './side-panel/side-panel.component' ;


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,SidePanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
