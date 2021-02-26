import { Component, EventEmitter, Input, Output ,OnInit , ViewChild} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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

  constructor(private route:ActivatedRoute,private router:Router){

  }
  fromChildEmit(info:any){
    alert(info)
  }
  callChild(){
    alert(this.childComp.title)
  }
  goToChild(){
    this.router.navigate(['parent/child', { id: 111 }]);
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      
      // this.name = params['name'];
    });
  
  }

}
