import "@angular/compiler"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterGuard } from './guard/router-guard.guard'
import { AppComponent } from './app.component';
// import { DoubleNumPipe } from './pipe/double-num.pipe';



const routes: Routes = [
  { path: 'parent' , canActivate: [RouterGuard] , loadChildren: () => import('./views/parents/parents.module').then(m => m.ParentsModule)},
  { path: 'templates' , canActivate: [RouterGuard] , loadChildren: () => import('./views/templates/templates.module').then(m => m.TemplatesModule)},
  { path: 'forms' , canActivate: [RouterGuard] , loadChildren: () => import('./views/forms/forms.module').then(m => m.FormsModule)},
  // { path: 'pagea/:id', canActivate: [RouterGuard], loadChildren: () => import('./views/page-a/page-a.module').then(m => m.PageAModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    // DoubleNumPipe
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }