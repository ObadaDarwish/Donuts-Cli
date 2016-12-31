import { Component, OnInit } from '@angular/core';
import {productservice} from '../productService';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  DonutMenu:any;
  constructor(private  products: productservice,private loadingbar:SlimLoadingBarService) {

  }

  ngOnInit() {
    this.loadingbar.start(()=>{
      console.log('loading');
    });
    this.products.getDonuts().subscribe(
      (donuts)=> {
        this.DonutMenu = donuts;
        this.loadingbar.complete();

      }
      , (error)=> {
        console.log("Can not load Donuts : " + error);
        this.loadingbar.complete();
      }
    );
  }

}
