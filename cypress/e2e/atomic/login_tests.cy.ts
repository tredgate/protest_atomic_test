import { LoginPage } from "../../page-objects/login-page";

describe("Login atomic Tests", () => {
  let loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.openPmtool();
  });

  context("Username input tests", () => {
    it("Username is visible", () => {
      loginPage.usernameIsVisible();
    });

    it("It is possible to type into username", () => {
      loginPage.typeUsername("username");
    });

    it("Username has value after typing", () => {
      let username = "username";
      loginPage.typeUsername(username).usernameHasValue(username);
    });
  });

  context("Password input tests", () => {
    it("Password is visible", () => {
      loginPage.passwordIsVisible();
    });

    it("It is possible to type into username", () => {
      loginPage.typePassword("password");
    });
  });

  context("Remember me tests", () => {
    it("Remember me is visible", () => {
      loginPage.rememberMeIsVisible();
    });

    it("Remember me is clickable", () => {
      loginPage.clickRememberMe();
    });

    it("Remember me is unchechked as default", () => {
      loginPage.rememberMeIsNotChecked();
    });

    it("Remember me is checked after click", () => {
      loginPage.clickRememberMe();
      loginPage.rememberMeIsChecked();
    });

    it("Remember me is not checked after 2 clicks", () => {
      loginPage.clickRememberMe();
      loginPage.clickRememberMe();
      loginPage.rememberMeIsNotChecked();
    });
  });
});
