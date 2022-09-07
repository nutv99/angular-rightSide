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
  @Output() outputPanelWidth = new EventEmitter<string>();
  @Output() mData = new EventEmitter<string>();

  @ViewChild('myPanel') myPanel: ElementRef;

  dataResult: any = {};
  dataSelected: string = '';

  constructor(private myhttp: HttpClient) {}

  ngOnInit() {
    // this.myhttp
    //   .get<any>('https://lovetoshopmall.com/dataservice/categoryTest.php')
    //   .subscribe((result) => {
    //     this.dataResult = result;
    //     console.log('Result', result[0].value);
    //   });
    this.myhttp
      .get<any>('https://lovetoshopmall.com/dataservice/categoryTest.php')
      .subscribe((data) => {
        // อ่านค่า result จาก JSON response ที่ส่งออกมา
        this.dataResult = data;
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

  setSeleced(sValue, divid, e: any) {
    console.clear();
    console.log('divid', divid);
    this.dataSelected = sValue; 
    this.mData.emit(sValue);

    // const box = document.querySelectorAll('.thumbNail') as HTMLDivElement;
    const box = document
      .querySelectorAll('.thumbNailSelected')
      .forEach((thisBox) => {
        console.log(thisBox.id, ',', divid, 'Matched');
        thisBox.classList.remove('thumbNailSelected');
        // if (thisBox.id === divid) {
        //   console.log(thisBox.id, ',', divid, 'Matched');
        //   thisBox.classList.add('thumbNailSelected');
        // } else {
        //   console.log(thisBox.id, ',', divid, 'No-Matched');
        //   thisBox.classList.remove('thumbNailSelected');
        // }
      });    

    const boxselected = document.querySelector('#' + divid) as HTMLDivElement ;  
    boxselected.classList.add('thumbNailSelected') ;

    // box[0].classList.add('thumbNailSelected');

    // box.forEach(function (value) {
    //   console.log(value.id);
    //   box[i].classList.remove('thumbNailSelected');
    // });

    // for (let i = 0; i <= box.length - 1, i++; ) {
    //   console.log('Box', i);
    //   // box[i].classList.remove('thumbNailSelected');
    // }
  }
}
