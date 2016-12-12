/**
 * Created by ObadaDarwish on 12/12/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LoadChildData = (function () {
    function LoadChildData(products) {
        this.products = products;
    }
    LoadChildData.prototype.resolve = function (route) {
        var _this = this;
        this.products.getDonuts().subscribe(function (donuts) {
            _this.DonutMenu = donuts;
            console.log(_this.DonutMenu);
        }, function (error) {
            console.log("Can not load Donuts : " + error);
        });
    };
    LoadChildData = __decorate([
        core_1.Injectable()
    ], LoadChildData);
    return LoadChildData;
}());
exports.LoadChildData = LoadChildData;
//# sourceMappingURL=ChildLoad.js.map