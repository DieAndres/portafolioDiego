import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/create/create.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
import { EditComponent } from './component/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    EditComponent,
   
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
