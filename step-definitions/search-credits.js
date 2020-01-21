let { $, sleep } = require('./funcs');

module.exports = function () { 

    this.When(/^I have selected the Celebs from the drop down menu next to the search bar$/, async function () {
        let dropDown = await $('.search-category-selector');
        dropDown.click();
        let celebsButton = await driver.findElement(by.linkText("Celebs"));
        celebsButton.click();   
        assert(celebsButton, "Expected the page to be loaded with a 'Celebs' filter in the drop down menu");
    });
    this.When(/^I enter "([^"]*)" in the searchbox and hit enter$/, async function (searchTerm) {
        let searchBox = await driver.findElement(by.css('#suggestion-search'));
        await searchBox.sendKeys(searchTerm, selenium.Key.ENTER);
        await sleep(3000);
        
    });
    this.When(/^I click on the first result for "([^"]*)"$/, async function (searchTerm) {
        let firstResult = await driver.findElement(by.linkText(searchTerm));
        firstResult.click();
        await sleep(2000);
    });
    this.Then(/^I should see credits under "([^"]*)"´s filmography$/, async function () {
        //this needs to be finished. line 25 doesnt work.
        let filmStuff = await driver.wait(until.elementLocated(By.id('#filmography')));
        assert(filmStuff, "Expected to see the filmography section on the webpage");
    
    });

}