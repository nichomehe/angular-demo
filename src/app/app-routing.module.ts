import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RouterGuardGuard } from './guard/router-guard.guard'
import { PageAModule } from './views/page-a/page-a.module'

const routes: Routes = [
  { path: 'parent' , canActivate: [RouterGuardGuard] , loadChildren: () => import('./views/parents/parents.module').then(m => m.ParentsModule)},
  { path: 'templates' , canActivate: [RouterGuardGuard] , loadChildren: () => import('./views/templates/templates.module').then(m => m.TemplatesModule)},
  { path: 'pagea/:id', canActivate: [RouterGuardGuard], loadChildren: () => import('./views/page-a/page-a.module').then(m => m.PageAModule)}
]


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }