let { $, sleep } = require('./funcs');

module.exports = function () {
    

    this.Given(/^that I am at the IMDb sing in option page$/, async function () {

        await helpers.loadPage('https://www.imdb.com/registration/signin?u=/');
        let logo = await driver.findElement(by.css('#signin-options'));
        assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB sing in option page');
    });

    this.When(/^click the on Sing in with IMDb$/, async function () {

        let signInButtons = await driver.findElements(by.css('.auth-provider-text'));
        let signInWithIMDbButton = signInButtons[0];
        await signInWithIMDbButton.click();
        await driver.findElement(by.css('#ap_email'));
    });

    this.When(/^type in the email : "([^"]*)"$/, async function (email) {

        let emailFeild = await driver.findElement(by.css('#ap_email'));
        await emailFeild.sendKeys(email);
    });

    this.When(/^type in the password : "([^"]*)"$/, async function (password) {

        let passwordFeild = await driver.findElement(by.css('#ap_password'));
        await passwordFeild.sendKeys(password);
        await sleep(2000);
    });

    this.When(/^type in the password : "([^"]*)" \+ hit ENTER$/, async function (password) {

        let passwordFeild = await driver.findElement(by.css('#ap_password'));
        await passwordFeild.sendKeys(password);
        await passwordFeild.sendKeys(selenium.Key.ENTER);
    });

    this.When(/^click sing in$/, async function () {

        let signInButton = await driver.findElement(by.css('#signInSubmit'));
        await signInButton.click();
    });

    this.Then(/^I should get singnd in$/, async function () {

        let logo = await driver.findElement(by.css('.ipc-button__text'));
        assert(logo, 'Expected the profile button to tell that the user is loggd in');
    });

}