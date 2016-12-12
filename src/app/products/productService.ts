/**
 * Created by ObadaDarwish on 11/12/2016.
 */
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class productervice {

  constructor(private http: Http) { }

  getDonuts(): Observable <any> {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8000/getDonuts', options)
      .map(response => {
        return response.json().Donuts;
      });

  }


}
