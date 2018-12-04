import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../servicios/juegos.service';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  juegoArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";
  constructor(private juegosService: JuegosService) {

  }

  ngOnInit() {
    this.juegosService.getJuegos().subscribe(
      list => {
        this.juegoArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key, miboton) {
    if (confirm('¿Estás seguro de que deseas borrar este juego?')) {
      this.juegosService.deleteJuego($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(juego) {
    return juego.nombre.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }



}
