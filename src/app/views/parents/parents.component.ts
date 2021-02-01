import { Component, EventEmitter, Input, Output ,OnInit , ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component'

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.less']
})
export class ParentsComponent {
  @ViewChild(ChildComponent)
  private childComp! :ChildComponent
  title:string = 'title from parent'
  fromChildEmit(info:any){
    alert(info)
  }
  callChild(){
    alert(this.childComp.title)
  }

}
