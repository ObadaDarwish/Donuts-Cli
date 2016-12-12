/**
 * Created by ObadaDarwish on 12/12/2016.
 */

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {productervice} from '../products/productService';

@Injectable()
export class LoadChildData implements Resolve<any> {
  DonutMenu:any;
  constructor(private products:productervice) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    this.products.getDonuts().subscribe(
      (donuts)=> {
        this.DonutMenu = donuts;
        console.log(this.DonutMenu);
      }
      , (error)=> {
        console.log("Can not load Donuts : " + error);
      }
    );
  }
}
