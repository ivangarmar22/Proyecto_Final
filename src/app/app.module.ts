import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/inicio/home/home.component';
import { MenuComponent } from './components/inicio/menu/menu.component';
import { FooterComponent } from './components/inicio/footer/footer.component';
import { CabeceraComponent } from './components/inicio/cabecera/cabecera.component';
import { ServiciosComponent } from './components/inicio/servicios/servicios.component';
import { DeportesComponent } from './components/inicio/deportes/deportes.component';
import { Deportes2Component } from './components/deportes2/deportes2.component';
import { ContactoComponent } from './components/inicio/contacto/contacto.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';


const appRoutes : Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'deportes', component: Deportes2Component},
  { path: 'torneos', component: TorneosComponent},
  { path: 'about', component: AboutComponent},
  { path: 'user/login', component: LoginComponent },
  //Ruta Inicial
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CabeceraComponent,
    ServiciosComponent,
    DeportesComponent,
    Deportes2Component,
    ContactoComponent,
    TorneosComponent,
    AboutComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, routerOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
