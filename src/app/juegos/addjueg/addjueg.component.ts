import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JuegosService } from '../../servicios/juegos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addjueg',
  templateUrl: './addjueg.component.html',
  styleUrls: ['./addjueg.component.css']
})
export class AddjuegComponent implements OnInit {
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.juegoService.form.controls;
  constructor(private juegoService: JuegosService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.juegoService.form.valid) {
      (this.juegoService.form.get('$key').value == null)
      this.juegoService.insertJuego(this.juegoService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.juegoService.form.reset();
      //this is to be done for proper reset operation
      this.juegoService.form.setValue({
        $key: null,
        nombre: '',
        fecha: '',
        descripcion: '',
        puntuacion: '',
        dificultad: '',
        desarrolladora: '',
        trailer: ''
      });
    }
  }

  clearField(){
    this.juegoService.form.setValue({
      $key: null,
      nombre: '',
      fecha: '',
      descripcion: '',
      puntuacion: '',
      dificultad: '',
      desarrolladora: '',
      trailer: ''
    });
  }

}
