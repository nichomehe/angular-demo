import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsComponent } from './parents.component'
import { PageAComponent } from '../page-a/page-a.component'
import { ChildComponent } from './child/child.component'
const routes: Routes = [
  { path: '', component: ParentsComponent ,
    children:[
      { path: 'pagea', component: PageAComponent },
      { path: 'child', component: ChildComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }