let { $, sleep } = require('./funcs');

module.exports = function () {
     
    let sleepTime = 2000;
    
    this.Given(/^I have clicked on most popular movies$/, async function () {
        let linkElement = await driver.findElement(by.linkText("Most Popular Movies"))
        await linkElement.click();
        await sleep(sleepTime)

    });

    this.Given(/^that I am on the popular movies page sorted by ranking$/, async function () {
        let header = await driver.findElements(by.css('Most Popular Movies'));
        assert(header, 'Expected the header to prove that I am on the Most Popular Movies page')
    });

   



}