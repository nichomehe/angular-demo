import { Component ,Input , ViewChild , AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-demo===';
  ngOnChanges(changes:any){
    console.log(changes)
  }
  ngOnInit(){
    console.log('ngOnInit')
  }
  ngDoCheck(){
    console.log('ngDoCheck')
    // console.log(this.title)
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

  parentEmit(e:any){
    alert(e)
  }
  onBlur(){
    console.log('onBlur==')
  }
  refClick(parent:any){

  }
}
