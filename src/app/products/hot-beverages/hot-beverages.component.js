"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HotBeveragesComponent = (function () {
    function HotBeveragesComponent() {
    }
    HotBeveragesComponent.prototype.ngOnInit = function () {
    };
    HotBeveragesComponent = __decorate([
        core_1.Component({
            selector: 'app-hot-beverages',
            templateUrl: './hot-beverages.component.html',
            styleUrls: ['./hot-beverages.component.css']
        })
    ], HotBeveragesComponent);
    return HotBeveragesComponent;
}());
exports.HotBeveragesComponent = HotBeveragesComponent;
//# sourceMappingURL=hot-beverages.component.js.map