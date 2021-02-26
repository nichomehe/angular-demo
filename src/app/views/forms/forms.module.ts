import "@angular/compiler"
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';


const routes: Routes = [
  { path: '', component: FormsComponent }
];

@NgModule({
  declarations: [
    FormsComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [FormsComponent]
})
export class FormsModule { }
