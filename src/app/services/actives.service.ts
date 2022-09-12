import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Active } from '../models/actives';

@Injectable()
export class ActiveService {
  private url: string;

  constructor( private _http: HttpClient ){
    this.url = Global.url;
  }

  getActives(): Observable<any> {
    return this._http.get<Active[]>(this.url + 'actives');
  }
}
