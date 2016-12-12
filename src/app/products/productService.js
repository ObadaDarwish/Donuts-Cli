"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ObadaDarwish on 11/12/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var productervice = (function () {
    function productervice(http) {
        this.http = http;
    }
    productervice.prototype.getDonuts = function () {
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get('http://localhost:8000/getDonuts', options)
            .map(function (response) {
            return response.json().Donuts;
        });
    };
    productervice = __decorate([
        core_1.Injectable()
    ], productervice);
    return productervice;
}());
exports.productervice = productervice;
//# sourceMappingURL=productService.js.map