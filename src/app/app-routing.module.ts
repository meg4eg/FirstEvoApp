import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './item/details/details.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './item/list/list.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'item/:id',
    component: ItemComponent,
    children: [
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
