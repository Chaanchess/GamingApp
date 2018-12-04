import { Injectable } from '@angular/core';
import { map, filter, switchMap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AddjuegComponent } from '../juegos/addjueg/addjueg.component';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private firebase: AngularFireDatabase,private router: Router) { }
  juegosList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    puntuacion: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
    dificultad: new FormControl('', Validators.required),
    desarrolladora: new FormControl('', Validators.required),
    trailer: new FormControl('', Validators.required)
  });

  getJuegos() {
    this.juegosList = this.firebase.list('juegos');
    return this.juegosList.snapshotChanges();
  }

  insertJuego(juego) {
    this.juegosList.push({
      nombre: juego.nombre,
      fecha: juego.fecha,
      descripcion: juego.descripcion,
      puntuacion: juego.puntuacion,
      dificultad: juego.dificultad,
      desarrolladora: juego.desarrolladora,
      trailer: juego.trailer,
    });
  }

  populateForm(juego) {
    this.form.setValue(juego);
  }

  updateJuego(juego) {
    this.juegosList.update(juego.$key,
      {
        nombre: juego.nombre,
        fecha: juego.fecha,
        descripcion: juego.descripcion,
        puntuacion: juego.puntuacion,
        dificultad: juego.dificultad,
        desarrolladora: juego.desarrolladora,
        trailer: juego.trailer,
      });
  }

  deleteJuego($key: string) {
    this.juegosList.remove($key);
  }

}


