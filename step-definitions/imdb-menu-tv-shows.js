let { $, sleep } = require('./funcs');

module.exports = function () {

    let sleepTime = 500

    this.Given(/^that i am on the IMDB front page$/, async function () {
        await helpers.loadPage('https://www.imdb.com/?ref_=nv_home');
        await sleep(sleepTime)
        let logo = await $('#home_img_holder');
        assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB website');


    });

    this.Given(/^i have clicked on the menu button$/, async function () {
        let button = await $('#imdbHeader-navDrawerOpen--desktop > div')
        button.click()
        await sleep(sleepTime)
    });

    this.Given(/^i have clicked on most popular shows$/, async function () {
        let linkElement = await driver.findElement(by.linkText("Most Popular Shows"))
        await linkElement.click();
        await sleep(sleepTime)
    });

    this.Given(/^that I am on the most popular TV shows page sorted by ranking$/, async function () {
        let option = await driver.findElement(by.css('#lister-sort-by-options option[selected]')).getText()
        console.log(option)
        assert.deepEqual('Ranking', option, "[message]");
    });

    this.When(/^I select sort by number of ratings in the sort by box$/, async function () {
        let button = await $('#lister-sort-by-options > option:nth-child(4)')
        button.click()
        await sleep(sleepTime)

    });

    this.Then(/^the list should be sorted by number of ratings$/, async function () {
        driver.navigate().refresh();
        let option = await driver.findElement(by.css('#lister-sort-by-options option[selected]')).getText()
        console.log(option)
        assert.deepEqual('Number of Ratings', option, "[message]");
    });

    this.When(/^I select sort by IMDB rating in the sort by box$/, async function () {
        let button = await $('#lister-sort-by-options > option:nth-child(2)')
        button.click()
        await sleep(sleepTime)
    });


    this.Then(/^the list should be sorted by IMDB rating$/, async function () {
        driver.navigate().refresh();
        let option = await driver.findElement(by.css('#lister-sort-by-options option[selected]')).getText()
        console.log(option)
        assert.deepEqual('IMDb Rating', option, "[message]");
    });

    this.When(/^I select sort by release date in the sort by box$/, async function () {
        let button = await $('#lister-sort-by-options > option:nth-child(3)')
        button.click()
        await sleep(sleepTime)
    });

    this.Then(/^the list should be sorted by release date$/, async function () {
        driver.navigate().refresh();
        let option = await driver.findElement(by.css('#lister-sort-by-options option[selected]')).getText()
        console.log(option)
        assert.deepEqual('Release Date', option, "[message]");
    });

}