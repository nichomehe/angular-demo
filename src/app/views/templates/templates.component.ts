import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.less']
})
export class TemplatesComponent{
  birthday:Date = new Date("1997/02/16")

  dataToView:string = 'info:   dataToView'

  inputVal:string | Event = ""

  demoArr:Array<number> = [1,2,3]

  propDirect:string = ""

  showSpan:boolean = true

  witchSpan:string = "1"


  eventClick(msg:string = ""){
    alert(msg)
  }
}
