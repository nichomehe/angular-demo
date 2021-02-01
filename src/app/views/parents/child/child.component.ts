import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
  // inputs:['parentTitle'],
  // outputs:['notify']
})
export class ChildComponent  {
  // inputValue : string = ""
  // notify:EventEmitter<string> = new EventEmitter<string>()
  @Input() parentTitle:string = ""
  @Output() notify:EventEmitter<string> = new EventEmitter<string>()
  title:string = "child's title"

  emitToParent(){
    this.notify.emit('this info is emited by child')
  }

}
