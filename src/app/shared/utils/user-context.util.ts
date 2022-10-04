import { UserContextModel } from '@shared/models/security/user-context.model';

export class UserContextUtil {
  static getUserContext(): UserContextModel | undefined {
    const userContextString = localStorage.getItem('user_context');
    if (!userContextString) {
      return;
    }
    return JSON.parse(userContextString) as UserContextModel;
  }

  static setUserContext(userContextModel: UserContextModel) {
    localStorage.setItem('user_context', JSON.stringify(userContextModel));
  }

  static updateUserContext(partitalUpdate: Partial<UserContextModel>) {
    let user = this.getUserContext();
    if (!user) {
      return;
    }

    user = { ...user, ...partitalUpdate };
    this.setUserContext(user);
  }
}
