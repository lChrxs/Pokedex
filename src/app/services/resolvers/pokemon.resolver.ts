import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const pokemonId: number = route.params['id']
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient){}
}
