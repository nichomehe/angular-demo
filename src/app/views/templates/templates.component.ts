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

  eventClick(msg:string = ""){
    alert(this.inputVal)
  }
}
