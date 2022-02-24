const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const loginData = require("../../data/login.json");

describe('Login Functional Testing', () => {
    it('should be able login as standard credentials', async () => {

        await LoginPage.open();
        await LoginPage.login(loginData.standard_user.email, loginData.standard_user.password);
        await expect(SecurePage.btnLogout).toBeExisting();
    });
    it('should NOT be able login as locked out user', async () => {

        await LoginPage.open();
        await LoginPage.login(loginData.locked_out_user.email, loginData.locked_out_user.password);
        await expect(LoginPage.spanRequiredErrorMsg).toBeExisting();
        await expect(LoginPage.spanRequiredErrorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    });
    it('should show error message for required fields', async () => {

        await LoginPage.open();
        await LoginPage.login("", loginData.standard_user.password);
        await expect(LoginPage.spanRequiredErrorMsg).toBeExisting();
        await expect(LoginPage.spanRequiredErrorMsg).toHaveText('Epic sadface: Username is required')
        await LoginPage.open();
        await LoginPage.login(loginData.standard_user.email, "");
        await expect(LoginPage.spanRequiredErrorMsg).toBeExisting();
        await expect(LoginPage.spanRequiredErrorMsg).toHaveText('Epic sadface: Password is required')
    });
    it('should NOT be able login with invalid credentials', async () => {

        await LoginPage.open();
        await LoginPage.login("invalid", "JustAny");
        await expect(LoginPage.spanRequiredErrorMsg).toBeExisting();
        await expect(LoginPage.spanRequiredErrorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service')
    });


});
