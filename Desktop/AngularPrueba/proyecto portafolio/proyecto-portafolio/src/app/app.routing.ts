import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/create/create.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
import { EditComponent } from './component/edit/edit.component';

const appRoutes:Routes=[
    {path:'', component:AboutComponent},
    {path:'about', component:AboutComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'create', component:CreateComponent},
    {path:'contact', component:ContactComponent},
    {path:'edit/:id', component:EditComponent},
    {path:'**', component:ErrorComponent},
];

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<Route>=RouterModule.forRoot(appRoutes);