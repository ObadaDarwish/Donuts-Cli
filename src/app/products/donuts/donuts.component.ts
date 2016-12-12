import { Component, OnInit } from '@angular/core';
import {productervice} from '../productService';
@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  DonutMenu:any;
  constructor(private  products: productervice) {

  }

  ngOnInit() {
    this.products.getDonuts().subscribe(
      (donuts)=> {
        this.DonutMenu = donuts;
      }
      , (error)=> {
        console.log("Can not load Donuts : " + error);
      }
    );
  }

}
