import StartPage from "../pagesGithub/start.page.js";
import SignupPage from "../pagesGithub/signup.page.js";

describe("Github auto test", () => {
   it("should open signup page", async () => {
      await browser.url("https://github.com/");

      await StartPage.clickOnSignupBtn();

      await expect(browser).toHaveUrl("https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home");
   })
   it("should show the register on the site", async () => {

      await browser.url("https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home");

      await expect(SignupPage.welcomeMessage).toBeDisplayed();

      await expect(SignupPage.emailInput).toBeDisplayed();
      await SignupPage.setEmailInput("nogija4559@soebing.com");
      await SignupPage.clickToContinueBtnByAttribute("password-container");

      await expect(SignupPage.passwordInput).toBeDisplayed();
      await SignupPage.setPasswordInput("qwerty!!@@12");
      await SignupPage.clickToContinueBtnByAttribute("username-container");

      await expect(SignupPage.emailInput).toBeDisplayed();
      await SignupPage.setUsernameInput("nogija4559");
      await SignupPage.clickToContinueBtnByAttribute("opt-in-container");

      await expect(SignupPage.optIn).toBeDisplayed();
      await SignupPage.setOptIn("y");
      await SignupPage.clickToContinueBtnByAttribute("captcha-and-submit-container");

      await expect(SignupPage.captcha).toBeDisplayed();
   });

});


