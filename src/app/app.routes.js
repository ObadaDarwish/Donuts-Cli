"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var products_component_1 = require('./products/products.component');
var catering_component_1 = require('./catering/catering.component');
var donuts_component_1 = require('./products/donuts/donuts.component');
var hot_beverages_component_1 = require('./products/hot-beverages/hot-beverages.component');
var ice_beverages_component_1 = require('./products/ice-beverages/ice-beverages.component');
var MainRoute = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: home_component_1.HomeComponent },
    // products
    {
        path: 'Products', component: products_component_1.ProductsComponent /*,  resolve: { load: LoadChildData}*/,
        children: [
            { path: '', redirectTo: 'Donuts', pathMatch: 'full' },
            { path: 'Donuts', component: donuts_component_1.DonutsComponent },
            { path: 'HotBeverage', component: hot_beverages_component_1.HotBeveragesComponent },
            { path: 'IceBeverage', component: ice_beverages_component_1.IceBeveragesComponent }
        ]
    },
    // catering route
    { path: 'Catering', component: catering_component_1.CateringComponent },
];
exports.MainRouting = router_1.RouterModule.forRoot(MainRoute);
//# sourceMappingURL=app.routes.js.map