import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { FormsComponent } from './forms/forms.component';
// import { AdminModule } from './admin/admin.module';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'child1', component: ChildComponent },
      { path: 'child2', component: Child2Component },
    ],
  },
  { path: 'about/:id', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forms', component: FormsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
