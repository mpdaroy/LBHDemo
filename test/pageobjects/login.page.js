

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $("//input[@data-test='username']");
    }
    get spanRequiredErrorMsg() {
        return $("//div[@class='error-message-container error']/h3");
    }
    get inputPassword() {
        return $("//input[@data-test='password']");
    }
    get btnLogin() {
        return $("//input[@data-test='login-button']");
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);     
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/');
    }
}

module.exports = new LoginPage();
