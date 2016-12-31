import { Component, OnInit } from '@angular/core';
import {productservice} from '../productService';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Component({
  selector: 'app-ice-beverages',
  templateUrl: './ice-beverages.component.html',
  styleUrls: ['./ice-beverages.component.css']
})
export class IceBeveragesComponent implements OnInit {
IceBeaverage:any;
  constructor(private products:productservice,private loadingbar:SlimLoadingBarService) { }

  ngOnInit() {
    this.loadingbar.start(()=>{
      console.log('loading');
    });
    this.products.getIceBeverages().subscribe(
      (IceBeaverage)=> {
        this.IceBeaverage = IceBeaverage;
        this.loadingbar.complete();
      }
      , (error)=> {
        console.log("Can not load HotBeverage : " + error);
        this.loadingbar.complete();
      }
    );
  }

}
