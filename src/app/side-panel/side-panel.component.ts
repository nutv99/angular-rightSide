import { Component, Input,ViewChild,ElementRef, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements AfterViewInit {
 @Input() sCaption: string = '' ;  
 @ViewChild("myPanel") myPanel: ElementRef;
panelWidth : number  = 200 ;

  constructor() { }

  ngOnInit() {
    this.myPanel.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
  }

  ngAfterViewInit() {
    this.myPanel.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
   // this.myPanel.nativeElement.style.width= '600px'


  }

}