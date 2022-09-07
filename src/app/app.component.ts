import { Component, VERSION } from '@angular/core';
import { SidePanelComponent } from './side-panel/side-panel.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  category = '';
  panelWidth: string = '0px';

  OpenRightSide() {
    this.panelWidth = '100%';
  }

  setPanelWidth(e: any) {
    console.log(e);

    this.panelWidth = e;
  }

  setDataSeleced(e: any) {
    
    this.category = e;
  }
}
