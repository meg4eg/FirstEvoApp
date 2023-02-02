import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveComponent } from './resolve/resolve.component';
import { PreFetchResolver } from './pre-fetch.resolver';

const routes: Routes = [
  { path: 'resolve', component: ResolveComponent, resolve: [PreFetchResolver] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
