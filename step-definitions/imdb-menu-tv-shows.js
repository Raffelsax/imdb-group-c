let { $, sleep } = require('./funcs');

module.exports = function () {



    this.Given(/^that i am on the IMDB front page$/, async function () {
        await helpers.loadPage('https://www.imdb.com/?ref_=nv_home');
        await sleep(2000)
        let logo = await $('#home_img_holder');
        assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB website');


    });

    this.Given(/^i have clicked on the menu button$/, async function () {
        let button = await $('#imdbHeader-navDrawerOpen--desktop > div')
        button.click()
        await sleep(2000)
    });

    this.Given(/^i have clicked on most popular shows$/, async function () {
        let linkElement = await driver.findElement(by.linkText("Most Popular Shows"))
        await linkElement.click();
        await sleep(2000)
    });

    this.Given(/^that I am on the most popular TV shows page$/, async function () {
        let headerText = await driver.findElements(by.css('Most Popular TV Shows'));
        assert(headerText, 'Expected the header text to prove that i am on the Most Popular TV Shows page')
    });

}