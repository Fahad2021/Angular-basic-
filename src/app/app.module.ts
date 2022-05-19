import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { FormsModule } from '@angular/forms';
import { EInfoComponent } from './e-info/e-info.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';
import { NavbarComponent } from './democomponent/navbar/navbar.component';
import { IntroComponent } from './democomponent/intro/intro.component';
import { CoursesComponent } from './democomponent/courses/courses.component';
import { FooterComponent } from './democomponent/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    FormcomponentComponent,
    EInfoComponent,
    DemocomponentComponent,
    NavbarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
