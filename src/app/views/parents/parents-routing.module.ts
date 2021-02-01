import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from '../page-a/page-a.component'

const routes: Routes = [
  { path: 'parent/pagea', component: PageAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }