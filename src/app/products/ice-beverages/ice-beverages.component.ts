import { Component, OnInit } from '@angular/core';
import {productervice} from '../productService';
@Component({
  selector: 'app-ice-beverages',
  templateUrl: './ice-beverages.component.html',
  styleUrls: ['./ice-beverages.component.css']
})
export class IceBeveragesComponent implements OnInit {
IceBeaverage:any;
  constructor(private products:productervice) { }

  ngOnInit() {
    this.products.getIceBeverages().subscribe(
      (IceBeaverage)=> {
        this.IceBeaverage = IceBeaverage;
      }
      , (error)=> {
        console.log("Can not load HotBeverage : " + error);
      }
    );
  }

}
