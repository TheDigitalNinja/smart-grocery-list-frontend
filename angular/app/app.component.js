"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        // Mockup of items
        this.items = ["Mockup Item"];
        this.newItem = new Item();
    }
    AppComponent.prototype.addItem = function () {
        if (this.newItem && this.newItem.name != null) {
            this.items.push(this.newItem.name);
            //document.getElementById('addGroceryInput').value = ""; // Reset the form on addition.
            this.newItem = new Item(); // Reset it to the constructor. TODO: Better way?
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'angular/app/app.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Item = (function () {
    function Item() {
    }
    return Item;
}());
//# sourceMappingURL=app.component.js.map