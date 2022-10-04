import { AuthContextModel } from '@shared/models/security/auth-context.model';

export class AuthContextUtil {
  static getAuthContext(): AuthContextModel | undefined {
    const authContextString = localStorage.getItem('auth_context');
    if (!authContextString) {
      return;
    }
    return JSON.parse(authContextString) as AuthContextModel;
  }

  static setAuthContext(authContextModel: AuthContextModel) {
    localStorage.setItem('auth_context', JSON.stringify(authContextModel));
  }
}
