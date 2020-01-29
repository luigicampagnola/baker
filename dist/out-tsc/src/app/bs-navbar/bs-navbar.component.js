import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let BsNavbarComponent = class BsNavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    logout() {
        this.auth.logout();
    }
};
BsNavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bs-navbar',
        templateUrl: './bs-navbar.component.html',
        styleUrls: ['./bs-navbar.component.css']
    })
], BsNavbarComponent);
export { BsNavbarComponent };
//# sourceMappingURL=bs-navbar.component.js.map