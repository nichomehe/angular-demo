import "@angular/compiler"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAComponent } from './views/page-a/page-a.component';
import { ChildComponent } from './views/parents/child/child.component';
import { ParentsComponent } from './views/parents/parents.component';
import { TemplatesComponent } from './views/templates/templates.component';
import { DoubleNumPipe } from './pipe/double-num.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    ChildComponent,
    PageAComponent,
    TemplatesComponent,
    DoubleNumPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
