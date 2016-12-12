"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_module_1 = require('./home/home.module');
var app_routes_1 = require('./app.routes');
var header_component_1 = require('./header/header.component');
var footer_component_1 = require('./footer/footer.component');
var products_module_1 = require('./products/products.module');
var catering_module_1 = require('./catering/catering.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, footer_component_1.FooterComponent, header_component_1.HeaderComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, home_module_1.HomeModule, products_module_1.ProductsModule, catering_module_1.CateringModule, app_routes_1.MainRouting],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map