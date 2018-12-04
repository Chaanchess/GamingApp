import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JuegosService } from './servicios/juegos.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddjuegComponent } from './juegos/addjueg/addjueg.component';
import { JuegosComponent } from './juegos/juegos/juegos.component';
import { EditjuegComponent } from './juegos/editjueg/editjueg.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'addjueg', component: AddjuegComponent, canActivate: [GuardService], data: {breadcrumb:"Añadir Juego"}},
  { path: 'juegos', component: JuegosComponent, canActivate: [GuardService], data: {breadcrumb:"Juegos"}},
  { path: 'editjueg/:id', component: EditjuegComponent, canActivate: [GuardService], data: {breadcrumb:"Editar Juego"}},
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent },
  { path: '**', component: InicioComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    AddjuegComponent,
    JuegosComponent,
    EditjuegComponent,
    RegistroComponent,
    InisesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [JuegosService, AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
