import { NgModule } from '@angular/core';


//RUTAS
import { APP_ROUTES } from './app.routes';


//Modulos
import { PageModule } from './pages/pages.module';


//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './login/registrer/registrer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent,       
  ],
  imports: [    
    APP_ROUTES,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
