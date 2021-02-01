import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsComponent } from './views/parents/parents.component'
import { PageAComponent } from './views/page-a/page-a.component'
import { TemplatesComponent } from './views/templates/templates.component'

const routes: Routes = [
  { path: 'parent', component: ParentsComponent },
  { path: 'pagea', component: PageAComponent },
  { path: 'templates', component: TemplatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }