import "@angular/compiler"
import { NgModule } from '@angular/core';
import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsComponent } from './parents.component';
import { ChildComponent } from './child/child.component';
import { PageAComponent } from '../page-a/page-a.component'

@NgModule({
  declarations: [
    ParentsComponent,
    ChildComponent,
    PageAComponent
  ],
  imports: [
    ParentsRoutingModule
  ],
  providers: [],
  bootstrap: [ParentsComponent]
})
export class ParentsModule { }
