import { Component, VERSION } from '@angular/core';
import { SidePanelComponent } from './side-panel/side-panel.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  panelWidth :string ='150px';

  OpenRightSide() {
    this.panelWidth = '300px' ;
  }
}
