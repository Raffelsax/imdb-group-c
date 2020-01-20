let { $, sleep } = require('./funcs');

module.exports = function () {

    this.Given(/^that I am at the IMDB homepage$/, async function () {
        await helpers.loadPage('https://imdb.com');
        await sleep(2000);
        let logo = await $('#home_img_holder');
        assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB website');
        
    });

    this.Given(/^I have clicked on the menu button$/, async function () {
        let button = await $('#imdbHeader-navDrawerOpen--desktop > div')
        button.click()
        await sleep(2000)
        assert(button, '');
        
    });

    this.Given(/^I have clicked on top rated movies$/, async function () {
        let linkElement = await driver.findElement(by.linkText("Top Rated Movies"))
        await linkElement.click();
        await sleep(2000)
        
    });

    this.Given(/^that I am on the top rated movies page$/, async function () {
        let header = await $('#main > div > span > div > div > h1')
        assert(header, '')
    });

    this.When(/^I select sort by ranking in the sort\-by box$/, async function () {
        let sortByDropDown = await $('#lister-sort-by-options')
        assert(sortByDropDown, 'Expected the sort-by drop-down menu to sort by ranking when I enter the list')
    });




}