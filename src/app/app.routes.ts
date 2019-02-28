import { RouterModule ,Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegistrerComponent } from './login/registrer/registrer.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrer', component: RegistrerComponent },    
    { path: '**', component: NoPageFoundComponent }    
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash:true } );