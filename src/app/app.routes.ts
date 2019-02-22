import { RouterModule ,Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { RegistrerComponent } from './login/registrer/registrer.component';


const appRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },   
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]    
    },
    { path: 'login', component: LoginComponent },
    { path: 'registrer', component: RegistrerComponent },    
    { path: '**', component: NoPageFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash:true } );