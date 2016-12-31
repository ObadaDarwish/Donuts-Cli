import { Component, OnInit } from '@angular/core';
import {productservice} from '../productService';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-hot-beverages',
  templateUrl: './hot-beverages.component.html',
  styleUrls: ['./hot-beverages.component.css']
})
export class HotBeveragesComponent implements OnInit {
hotBeaverage:any
  constructor(private products:productservice,private loadingbar:SlimLoadingBarService) { }

  ngOnInit() {
    this.loadingbar.start(()=>{
      console.log('loading');
    });
    this.products.getHotBeverages().subscribe(
      (HotBeverage)=> {
        this.hotBeaverage = HotBeverage;
        this.loadingbar.complete();
      }
      , (error)=> {
        console.log("Can not load HotBeverage : " + error);
        this.loadingbar.complete();
      }
    );
  }

}
