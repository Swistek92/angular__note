import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Random1Component } from './random1/random1.component';
import { Random2Component } from './random2/random2.component';
import { LogMesage1Service } from './random2/services/log-mesage1.service';
import { LogMesage2Service } from './random2/services/log-mesage2.service';
import { ADMIN_DATA } from './ADMIN_DATA/admin-data';
import { AdminDataService } from './random2/services/admin-data.service';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { authenticatiGuard } from './guard/authenticati.guard';
import { AuthService } from './services/auth.service';
import { FirstModule } from './first/first.module';
import { UsersComponent } from './users/users.component';
// import { AdminModule } from './admin/admin.module';
// ng new Demo --no-standalone
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { AsyncComponent } from './async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    ContactsComponent,
    ServicesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ChildComponent,
    Child2Component,
    Random1Component,
    Random2Component,
    FormsComponent,
    LoginComponent,
    AdminComponent,
    AsyncComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Dodano HttpClientModule
    FormsModule,
    ReactiveFormsModule,
    FirstModule,
    UsersComponent,
  ],
  providers: [
    AuthService,
    provideClientHydration(),
    AdminDataService,
    provideHttpClient(withFetch()), // Konfiguracja provideHttpClient z withFetch
    // { provide: LogMesage1Service, useClass: LogMesage1Service },
    { provide: 'LOG_MSG1', useClass: LogMesage1Service },
    { provide: 'LOG_MSG2', useClass: LogMesage2Service },
    { provide: 'STR_MSG', useValue: 'this is the string msg' },
    // { provide: LogMesage1Service, useClass: LogMesage2Service },
    // { provide: ADMIN_DATA, useValue: ADMIN_DATA },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
