import { Component, OnInit } from '@angular/core';
import {productervice} from '../productService';
@Component({
  selector: 'app-hot-beverages',
  templateUrl: './hot-beverages.component.html',
  styleUrls: ['./hot-beverages.component.css']
})
export class HotBeveragesComponent implements OnInit {
hotBeaverage:any
  constructor(private products:productervice) { }

  ngOnInit() {
    this.products.getHotBeverages().subscribe(
      (HotBeverage)=> {
        this.hotBeaverage = HotBeverage;
      }
      , (error)=> {
        console.log("Can not load HotBeverage : " + error);
      }
    );
  }

}
