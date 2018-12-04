import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  res = new Observable<boolean>();
  constructor(private autenticacionService: AutenticacionService) { this.res=of(true);}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>  {
    return this.autenticacionService.isLogged().pipe(map(user=>{
        if(user)
          return true;
        else
          return false;
    }));
    
}
}
