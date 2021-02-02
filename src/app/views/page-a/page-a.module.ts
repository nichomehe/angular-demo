import "@angular/compiler"
import { NgModule } from '@angular/core';
import { PageARoutingModule } from './page-a-routing.module';
import { PageAComponent } from './page-a.component';


@NgModule({
  declarations: [
    PageAComponent,
  ],
  imports: [
    PageARoutingModule
  ],
  providers: [],
  bootstrap: [PageAComponent]
})
export class PageAModule { }
