import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
let AuthService = class AuthService {
    constructor(private, AngularFireAuth) {
        this.user$ = afAuth.authState;
    }
    login() {
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
        this.afAuth.auth.signOut();
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map