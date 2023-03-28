import { MainPage } from "./main-page";

export class LoginPage {
  private USERNAME_INPUT = "#username";
  private PASSWORD_INPUT = "#password";
  private LOGIN_BUTTON = "button[type=submit]";
  private PSW_FORGOTTEN_ANCHOR = "#forget_password";
  private PMTOOL_URL = "http://tredgate.com/pmtool";
  private REMEMBER_ME_CHECKBOX = "#uniform-remember_me";
  private REMEMBER_ME_CHECKED = `${this.REMEMBER_ME_CHECKBOX} .checked`;

  openPmtool() {
    cy.visit(this.PMTOOL_URL);
    return this;
  }

  usernameIsVisible() {
    cy.get(this.USERNAME_INPUT).should("be.visible");
    return this;
  }

  typeUsername(username) {
    cy.get(this.USERNAME_INPUT).type(username);
    return this;
  }

  usernameHasValue(username) {
    cy.get(this.USERNAME_INPUT).should("have.value", username);
    return this;
  }

  passwordIsVisible() {
    cy.get(this.PASSWORD_INPUT).should("be.visible");
    return this;
  }

  typePassword(password) {
    cy.get(this.PASSWORD_INPUT).type(password);
    return this;
  }

  loginButtonIsVisible() {
    cy.get(this.LOGIN_BUTTON).should("be.visible");
  }

  clickLoginButton(): MainPage {
    cy.get(this.LOGIN_BUTTON).should("be.visible");
    return new MainPage();
  }

  passwordForgottenAnchorIsVisible() {
    cy.get(this.PSW_FORGOTTEN_ANCHOR).should("be.visible");
    return this;
  }

  clickPasswordForgotten() {
    cy.get(this.PSW_FORGOTTEN_ANCHOR).click();
    //TODO return lost password page
  }

  rememberMeIsVisible() {
    cy.get(this.REMEMBER_ME_CHECKBOX).should("be.visible");
    return this;
  }

  clickRememberMe() {
    cy.get(this.REMEMBER_ME_CHECKBOX).click();
    return this;
  }

  rememberMeIsChecked() {
    cy.get(this.REMEMBER_ME_CHECKED).should("be.visible");
    return this;
  }

  rememberMeIsNotChecked() {
    cy.get(this.REMEMBER_ME_CHECKED).should("not.exist");
    cy.get(this.REMEMBER_ME_CHECKBOX).should("be.visible");
    return this;
  }
}
