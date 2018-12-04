import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JuegosService } from '../../servicios/juegos.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editjueg',
  templateUrl: './editjueg.component.html',
  styleUrls: ['./editjueg.component.css']
})
export class EditjuegComponent implements OnInit {
  formControls = this.juegoService.form.controls;
  juegoForm: FormGroup;
  juego: any;

  constructor(private router: Router, private juegoService: JuegosService) {
  }

  ngOnInit() {

  }

  saveEdit() {
    this.juegoService.updateJuego(this.juegoService.form.value);
    this.router.navigate(['/juegos']);
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
