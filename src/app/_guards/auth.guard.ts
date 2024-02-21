import { Injectable, Injector, inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// @Injectable()
// class PermissionsService {
//   constructor(public toastr: ToastrService) { }
// }

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  // const injector = Injector.create({ providers: [{ provide: PermissionsService, deps: [] }] });
  // const permissionsService: PermissionsService = injector.get(PermissionsService);

  const user = localStorage.getItem("user");
  if (user) {
    return true;
  }
  else {
    alert("Không có quyền truy cập");
    return false;
  }
};
