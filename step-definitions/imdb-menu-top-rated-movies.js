let { $, sleep } = require('./funcs');

module.exports = function () {

    let sleepTime = 2000;

    this.Given(/^that I am at the IMDB homepage$/, async function () {
        await helpers.loadPage('https://imdb.com');
        await sleep(sleepTime);
        let logo = await $('#home_img_holder');
        assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB website');
        
    });

    this.Given(/^I have clicked on the menu button$/, async function () {
        let button = await $('#imdbHeader-navDrawerOpen--desktop > div')
        button.click()
        await sleep(sleepTime)
        assert(button, '');
        
    });

    this.Given(/^I have clicked on top rated movies$/, async function () {
        let linkElement = await driver.findElement(by.linkText("Top Rated Movies"))
        await linkElement.click();
        await sleep(sleepTime)
        
    });

   
    this.Given(/^that I am on the top rated movies page sorted by ranking$/, async function () {
        let header = await driver.findElements(by.css('Top Rated Movies'));
        assert(header, 'Expected the header to prove that I am on the Top Rated Movies page')
    });

    
    this.When(/^I select sort by IMDB ratings in the sort\-by box$/, async function () {
        let dropDownBox = await $('#lister-sort-by-options > option:nth-child(2)'); 
        dropDownBox.click();
        await sleep(sleepTime);
        assert(dropDownBox, 'Expected the list to change to IMDB ratings');

    });

    
    this.Then(/^the list should re\-sort by IMDB ratings$/, async function () {
        driver.navigate().refresh();
        let dropDownOption = await driver.findElement(by.css('#lister-sort-by-options option[selected]')).getText();
        assert('IMDB Rating', dropDownOption);
        
    }); 

    this.When(/^I select sort by release date in the sort\-by box$/, async function () {
        let dropDownBox = await $('#lister-sort-by-options > option:nth-child(3)');
        dropDownBox.click();
        await sleep(sleepTime);
        assert(dropDownBox, 'Expected the list to change to release dates');
    });

    this.Then(/^the list should re\-sort by release date$/, async function () {
        driver.navigate().refresh();
        let dropDownOption = await driver.findElement(by.css('#lister-sort-by-options option[selected]')).getText();
        assert('Release Date', dropDownOption);
    });

    this.When(/^I select sort by number of ratings in the sort\-by box$/, async function () {
        let dropDownBox = await $('#lister-sort-by-options > option:nth-child(4)');
        dropDownBox.click();
        await sleep(sleepTime);
        assert(dropDownBox, 'Expected the list to change to number of ratings');
    });

    this.Then(/^the list should re\-sort by number of ratings$/, async function () {
        driver.navigate().refresh();
        let dropDownOption = await driver.findElement(by.css('#lister-sort-by-options option[selected]')).getText();
        assert('Number of Ratings', dropDownOption);
    });


}