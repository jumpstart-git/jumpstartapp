//Type your code here
function logoutOfApplication() {
  login.loginBody.usernameField.text="";
  login.loginBody.passwordField.text="";

  mainPage.destroy();
  businessMyProfile.destroy();
  BusinessProfile.destroy();
  searchResultProfile.destroy();
    login.show();
}
