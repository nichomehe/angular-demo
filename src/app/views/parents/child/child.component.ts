import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
  // inputs:['parentTitle'],
  // outputs:['notify']
})
export class ChildComponent  {
  childId: number | string

  // inputValue : string = ""
  // notify:EventEmitter<string> = new EventEmitter<string>()
  @Input() parentTitle:string = ""
  @Output() notify:EventEmitter<string> = new EventEmitter<string>()
  title:string = "child's title"

  constructor(private route:ActivatedRoute){}
  emitToParent(){
    this.notify.emit('this info is emited by child')
  }

  ngOnInit() {
    // this.childId = this.route.snapshot.paramMap.get('id') || null;
  }

}
