class StartPage {
   get signupBtn () { return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]') };

   async clickOnSignupBtn() {
      await this.signupBtn.click();
   }

}

export default new StartPage();