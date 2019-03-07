import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations:[
    BreadcrumbsComponent,
    HeaderComponent,    
    SidebarComponent,
    NoPageFoundComponent
    ],
    exports:[
        BreadcrumbsComponent,
        HeaderComponent,        
        SidebarComponent,
        NoPageFoundComponent
    ]
})

export class SharedModule{ }