import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegistrerComponent } from './login/registrer/registrer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegistrerComponent   
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
