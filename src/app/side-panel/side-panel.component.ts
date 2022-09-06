import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
 @Input sCaption: string = '' ;  
 
panelWidth : number  = 10 ;

  constructor() { }

  ngOnInit() {
  }

}