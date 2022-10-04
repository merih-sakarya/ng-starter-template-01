export class AuthContextModel {
  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  accessToken: string;
}
