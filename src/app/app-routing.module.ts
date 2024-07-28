import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  Router,
  PreloadAllModules,
  NoPreloading,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { FormsComponent } from './forms/forms.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { authenticatiGuard } from './guard/authenticati.guard';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { UsersComponent } from './users/users.component';
import { AsyncComponent } from './async/async.component';
// import { AdminModule } from './admin/admin.module';
const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    // loadChildren: () =>
    //   import('./first/first.module').then((m) => m.FirstModule),
  },
  { path: 'users', component: UsersComponent },
  {
    path: 'second',
    // component: SecondComponent,
    loadChildren: () =>
      import('./second/second.module').then((m) => m.SecondModule),
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'child1', component: ChildComponent },
      { path: 'child2', component: Child2Component },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'async', component: AsyncComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authenticatiGuard],
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
  // { path: 'first', loadChildren: () => import('./first2/first2.module').then(m => m.First2Module) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
