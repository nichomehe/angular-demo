import "@angular/compiler"
import { NgModule } from '@angular/core';
import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsComponent } from './parents.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    ParentsComponent,
    ChildComponent
  ],
  imports: [
    ParentsRoutingModule
  ],
  providers: [],
  bootstrap: [ParentsComponent]
})
export class ParentsModule { }
