import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {
  loginForm: FormGroup;
  userdata: any;
  mensaje = false;
  constructor(private formBuilder: FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]
      ]
    });
  }

  onSubmit() {
    this.userdata = this.saveUserdata();
    document.getElementById('btn1').setAttribute("disabled","disabled");
    this.autService.inicioSesion(this.userdata)
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(
        error => {
          console.log(error);
          this.mensaje = true
        }
      )
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    return saveUserdata;
  }
  isAuth() {
    return this.autService.isAuthenticated();
  }

  signInWithGoogle(){
    this.autService.doGoogleLogin()
  }

}