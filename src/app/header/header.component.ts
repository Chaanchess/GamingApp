import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {
    return this.autService.isAuthenticated();
  }

  onLogout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      this.autService.logout();
      this.router.navigate(['/inicio'])
    }

  }

}
