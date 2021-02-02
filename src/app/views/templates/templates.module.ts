import "@angular/compiler"
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { FormsModule } from '@angular/forms';
import { DoubleNumPipe } from '../../pipe/double-num.pipe';


@NgModule({
  declarations: [
    TemplatesComponent,
    DoubleNumPipe
  ],
  imports: [
    TemplatesRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [TemplatesComponent]
})
export class TemplatesModule { }
