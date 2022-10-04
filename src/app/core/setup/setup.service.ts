import { Injectable } from '@angular/core';

import { AuthContextUtil } from '@shared/utils/auth-context.util';
import { AuthenticationService } from '@core/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  constructor(private authenticationService: AuthenticationService) {}

  /**
   * It is used to get the necessary information and make the necessary checks before installing the APP.
   * Ex. User and Company information, Roles and Permissions, Token validations etc.
   */
  initialize(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      // TODO: Clear metadata information from localstorage.
      // MetaDataUtil.clear();

      // Get access token and initialize the application.
      const authContext = AuthContextUtil.getAuthContext();

      // TODO: Create a strategy according to your authentication structure.
      // For example, If there is no token, logout the user. Or if the token has expired, refresh the token or log out the user )
      if (!authContext) {
        this.authenticationService.logout();
      }

      resolve();
    });
  }
}
