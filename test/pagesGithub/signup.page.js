class SignupPage {
   get welcomeMessage() { return $('[data-target="typing-effect.content"]') };
   get emailInput() { return $("#email") };
   get passwordInput() { return $("#password") };
   get usernameInput() { return $("#login") };
   get optIn() { return $("#opt_in") };
   get captcha() { return $("#captcha-and-submit-container") };
   get continueBtns() { return $$(".js-continue-button") };


   async setEmailInput(email) {
      await this.emailInput.addValue(email);
   };

   async setPasswordInput(password) {
      await this.passwordInput.addValue(password);
   };

   async setUsernameInput(username) {
      await this.usernameInput.addValue(username);
   };

   async setOptIn(opt) {
      await this.optIn.addValue(opt);
   };

   async clickToContinueBtnByAttribute(attribute) {
      const continueButtons = await this.continueBtns;

      for (const button of continueButtons) {
         const dataAttribute = await button.getAttribute('data-continue-to');

         if (dataAttribute === attribute) {
            await button.waitForClickable();
            await button.click();
            break;
         }
      }
   }
};

export default new SignupPage();