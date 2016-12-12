"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var products_component_1 = require('./products.component');
var donuts_component_1 = require('./donuts/donuts.component');
var hot_beverages_component_1 = require('./hot-beverages/hot-beverages.component');
var ice_beverages_component_1 = require('./ice-beverages/ice-beverages.component');
var app_routes_1 = require('../app.routes');
var productService_1 = require('./productService');
var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                app_routes_1.MainRouting
            ],
            declarations: [products_component_1.ProductsComponent, donuts_component_1.DonutsComponent, hot_beverages_component_1.HotBeveragesComponent, ice_beverages_component_1.IceBeveragesComponent],
            exports: [products_component_1.ProductsComponent],
            providers: [productService_1.productervice /*,LoadChildData*/]
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map