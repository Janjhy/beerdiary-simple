import {Log, UserManager} from 'oidc-client';
import { Config } from "../Config";

class AuthenticationService {
  userManager : UserManager;

  constructor() {
    const options = {
      authority: Config.authority,
      client_id: Config.clientId,
      redirect_uri: `${Config.applicationUrl}signin-callback.html`,
      silent_redirect_uri: `${Config.applicationUrl}silent-renew.html`,
      post_logout_redirect_uri: `${Config.applicationUrl}`,
      response_type: 'code',
      scope: Config.clientScope
    };
    this.userManager = new UserManager(options);
    Log.logger = console;
    Log.level = Log.INFO;
  }

  getThisUser()  {
    return this.userManager.getUser();
  }

  login() {
    return this.userManager.signinRedirect();
  }

  logout()  {
    return this.userManager.signoutRedirect();
  }

  tokenRenew() {
    return this.userManager.signinSilent();
  }
}

export default AuthenticationService;
