let { $, sleep } = require('./funcs');

module.exports = function () {

    this.Given(/^that I am on the IMDB website$/,  async function () {
        await helpers.loadPage('https://imdb.com');
        await sleep(1000);
        let logo = await $('#home_img_holder');
        assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB website');

    });

    this.Given(/^that I am on the IMDB homepage\.$/, async function () {
        //not implemented yet
    });

    this.When(/^I enter the "([^"]*)" in a search field$/, async function (movieTitle) {
        let searchField = await $('#suggestion-search')
        await searchField.sendKeys(movieTitle)
        await sleep(5000)

    });
}