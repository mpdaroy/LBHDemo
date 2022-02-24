

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLogout() {
        return $$("//a[@id='logout_sidebar_link']");
    }
}

module.exports = new SecurePage();
