import {
  Component,
  Input,
  Output,
  ViewChild,
  ElementRef,
  OnInit,
  HostListener,
  EventEmitter,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent implements OnInit, AfterViewInit {
  @Input() sCaption: string = '';
  @Input() panelWidth: string = '';
  @Input() dataCode: string = '';

  dataResult: any = {};

  @ViewChild('myPanel') myPanel: ElementRef;
  @Output() outputPanelWidth = new EventEmitter<string>();

  constructor(private myhttp: HttpClient) {}

  ngOnInit() {
    this.myhttp
      .get<any>('https://lovetoshopmall.com/dataservice/categoryTest.php')
      .subscribe((result) => {
        this.dataResult = result;
        console.log(result.value);
      });
  }

  ngAfterViewInit() {
    // this.myPanel.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
    // this.myPanel.nativeElement.style.width= '600px'
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.myPanel.nativeElement.style.width = this.panelWidth ;
    //this.myPanel.nativeElement.style.width = '350px' ;
  }

  ClosePanel() {
    //this.myPanel.nativeElement.classList.add('otherclass');
    let sValue = '0px';
    this.panelWidth = '0px;';
    this.outputPanelWidth.emit('0px');
    //this.myPanel.nativeElement.style.width= '10px'
    //this.myPanel.nativeElement.classList.add("otherclass");
  }
}
