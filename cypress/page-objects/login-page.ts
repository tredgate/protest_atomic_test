import { LostPasswordPage } from "./lost_password_page";
import { MainPage } from "./main-page";

export class LoginPage {
  private USERNAME_INPUT = "#username";
  private PASSWORD_INPUT = "#password";
  private LOGIN_BUTTON = "button[type=submit]";
  private PSW_FORGOTTEN_ANCHOR = "#forget_password";
  private PMTOOL_URL = "http://tredgate.com/pmtool";
  private REMEMBER_ME_CHECKBOX = "#uniform-remember_me";
  private REMEMBER_ME_TEXT_LABEL = `.checkbox:has(${this.REMEMBER_ME_CHECKBOX})`;
  private REMEMBER_ME_CHECKED = `${this.REMEMBER_ME_CHECKBOX} .checked`;
  private LOGO_IMG = "div.login-page-logo > img";
  private HEADER_H3 = ".form-title";

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

  clickPasswordForgotten(): LostPasswordPage {
    cy.get(this.PSW_FORGOTTEN_ANCHOR).click();
    return new LostPasswordPage();
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

  logoIsVisible() {
    cy.get(this.LOGO_IMG).should("be.visible");
  }

  usernameHasPlaceholder(usernamePlaceholder) {
    cy.get(this.USERNAME_INPUT).should(
      "have.attr",
      "placeholder",
      usernamePlaceholder
    );
    return this;
  }

  passwordHasPlaceholder(passwordPlaceholder) {
    cy.get(this.PASSWORD_INPUT).should(
      "have.attr",
      "placeholder",
      passwordPlaceholder
    );
    return this;
  }

  titleIsVisible() {
    cy.get(this.HEADER_H3).should("be.visible");
    return this;
  }

  titleHasText(titleText) {
    cy.get(this.HEADER_H3).should("have.text", titleText);
    return this;
  }

  rememberMeCheckboxHasText(rememberMeText) {
    cy.get(this.REMEMBER_ME_TEXT_LABEL).should("contain.text", rememberMeText);
    return this;
  }

  loginButtonHasText(loginButtonText) {
    cy.get(this.LOGIN_BUTTON).should("have.text", loginButtonText);
    return this;
  }

  lostPasswordAnchorHasText(lostPasswordAnchorText) {
    cy.get(this.PSW_FORGOTTEN_ANCHOR).should(
      "have.text",
      lostPasswordAnchorText
    );
    return this;
  }
}
