import { LoginPage } from "../../page-objects/login-page";

describe("Login atomic Tests", () => {
  let loginPage = new LoginPage();

  before(() => {
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
      loginPage.openPmtool();
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
      loginPage.openPmtool();
      loginPage.rememberMeIsNotChecked();
    });

    it("Remember me is checked after click", () => {
      loginPage.clickRememberMe();
      loginPage.rememberMeIsChecked();
    });

    it("Remember me is not checked after 2 clicks", () => {
      loginPage.openPmtool();
      loginPage.clickRememberMe();
      loginPage.clickRememberMe();
      loginPage.rememberMeIsNotChecked();
    });
  });
  context("Headers and texts tests", () => {
    it("Logo is visible", () => {
      loginPage.logoIsVisible();
    });

    it("Username has Username as placeholder", () => {
      loginPage.usernameHasPlaceholder("Username");
    });

    it("Password has Password as placeholder", () => {
      loginPage.passwordHasPlaceholder("Password");
    });

    it("Title is visible", () => {
      loginPage.titleIsVisible();
    });

    it("Title has Login as text", () => {
      loginPage.titleHasText("Login");
    });

    it("Remember me checkbox has text Remember Me", () => {
      loginPage.rememberMeCheckboxHasText("Remember Me");
    });

    it("Login button has Login as text", () => {
      loginPage.loginButtonHasText("Login");
    });

    it("Lost password anchor has Password forgotten? as text", () => {
      loginPage.lostPasswordAnchorHasText("Password forgotten?");
    });
  });
});
