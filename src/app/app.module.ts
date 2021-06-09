import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';

/* Componentes */
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
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { RegistroComponent } from './components/registro/registro.component';
import { MapaComponent } from './components/dashboard/mapa/mapa.component';
import { CalendarioComponent } from './components/dashboard/calendario/calendario.component';
import { DocumentosComponent } from './components/dashboard/documentos/documentos.component';
import { ConfiguracionComponent } from './components/dashboard/configuracion/configuracion.component';
import { SportsComponent } from './components/dashboard/sports/sports.component';
import { Torneos1Component } from './components/dashboard/torneos1/torneos1.component';
import { Servicios1Component } from './components/dashboard/servicios1/servicios1.component';
import { Home1Component } from './components/dashboard/home1/home1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/* Rutas Menú */
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'comunidad', component: Deportes2Component },
  { path: 'torneos', component: TorneosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: Home1Component, canActivate: [LoginGuard] },
  { path: 'sports', component: SportsComponent, canActivate: [LoginGuard] },
  { path: 'torneos1', component: Torneos1Component, canActivate: [LoginGuard] },
  { path: 'servicios1', component: Servicios1Component, canActivate: [LoginGuard] },
  { path: 'mapa', component: MapaComponent, canActivate: [LoginGuard] },
  { path: 'calendario', component: CalendarioComponent, canActivate: [LoginGuard] },
  { path: 'inscripciones', component: DocumentosComponent, canActivate: [LoginGuard] },
  { path: 'datos', component: ConfiguracionComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
    LoginComponent,
    ProfileComponent,
    RegistroComponent,
    MapaComponent,
    CalendarioComponent,
    DocumentosComponent,
    ConfiguracionComponent,
    SportsComponent,
    Torneos1Component,
    Servicios1Component,
    Home1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, routerOptions),
    ModalModule,
    NgbModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
