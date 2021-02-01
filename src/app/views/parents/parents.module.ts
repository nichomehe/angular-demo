import "@angular/compiler"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsComponent } from './parents.component';
import { PageAComponent } from '../page-a/page-a.component';

@NgModule({
  declarations: [
    ParentsComponent,
    PageAComponent
  ],
  imports: [
    BrowserModule,
    ParentsRoutingModule
  ],
  providers: [],
  bootstrap: [ParentsComponent]
})
export class AppModule { }
