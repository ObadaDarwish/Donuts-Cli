import {Component, OnInit, AfterContentInit, OnChanges} from '@angular/core';
import {productervice} from './productService';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges {
  IsDataAvailable: boolean;
  DonutMenu: any;

  constructor(private  products: productervice) {
    this.IsDataAvailable = false;
  }

  ngOnChanges() {
    this.products.getDonuts().subscribe(
      (donuts)=> {
        this.DonutMenu = donuts;
        this.IsDataAvailable = true;

      }
      , (error)=> {
        console.log("Can not load Donuts : " + error);
      }
    );
  }


}
