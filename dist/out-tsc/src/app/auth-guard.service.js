import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        return this.auth.user$.map(user => {
            if (user)
                return true;
            this.router.navigate(['/login']);
            return false;
        });
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable()
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map