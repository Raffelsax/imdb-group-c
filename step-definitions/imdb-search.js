let { $, sleep } = require('./funcs');

module.exports = function () {
    let searchField;

    this.Given(/^that I am at the IMDB website$/, async function () {
        await helpers.loadPage('https://imdb.com');
        let logo = await $('#home_img_holder');
        assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB website');

    });

    this.Given(/^I have selected the All filter from the drop down menu$/, async function () {
        let logo = await $('label.ipc-button:nth-child(1) > div:nth-child(1)');
        assert(logo, 'Expected the All filter to be default');
    });
    let latestSearch;
    this.When(/^I enter "([^"]*)" in the search field$/, async function (userSearch) {
        let searchField = await $('#suggestion-search');
        await searchField.sendKeys(userSearch);
        latestSearch = userSearch;

    });

    this.When(/^I click the search button$/, async function () {
        let button = await $('#suggestion-search-button > svg:nth-child(1)')
        button.click()
    });

    this.Then(/^I get a list of results$/, async function () {
        let gotResults = false;
        while (!gotResults) {
            gotResults = await $('.findResult, .findNoResults');
            await sleep(100);
        }

        let text = "";

        let results = await $('.findResult');
        let firstResult = results instanceof Array ? results[0] : results;

        if (firstResult) {
            text = await firstResult.getText();
        }
        assert.include(text.toLowerCase(), latestSearch.toLowerCase(), "Search term not included in search results");
    });

    this.Given(/^I have selected the Celebs filter from the drop down menu$/, async function () {
        let filterButton = await $('.ipc-icon--arrow-drop-down');
        filterButton.click();
        let celebsButton = await $('a._1L5qcXA4wOKR8LeHJgsqja:nth-child(4)')
        celebsButton.click()
        assert(celebsButton, 'Expected the Celebs filter to be chosen');
    });

    this.Given(/^I have selected the Keyword filter from the drop down menu$/, async function () {
        let filterButton = await $('.ipc-icon--arrow-drop-down');
        filterButton.click();
        let keyWordButton = await $('a._1L5qcXA4wOKR8LeHJgsqja:nth-child(6)')
        //a._1L5qcXA4wOKR8LeHJgsqja:nth-child(6)
        keyWordButton.click()
        assert(keyWordButton, 'Expected the Keyword filter to be chosen');
    });

}

