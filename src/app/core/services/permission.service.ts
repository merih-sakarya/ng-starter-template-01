import { Injectable } from '@angular/core';
import { UserRoleEnum } from '@shared/enums/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor() {}

  hasPermission(role: UserRoleEnum | UserRoleEnum[]): Promise<boolean> {
    // TODO: Check for permission
    return new Promise(() => true);
  }

  setPermissions(permissions: UserRoleEnum[]) {
    // TODO: Set permissions
  }

  resetPermissions() {
    // TODO: Reset permissions
  }
}
