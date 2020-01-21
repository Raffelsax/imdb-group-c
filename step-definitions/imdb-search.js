let { $, sleep } = require('./funcs');

module.exports = function () {
  let searchField;

  this.Given(/^that I am at the IMDB website$/, async function () {
    await helpers.loadPage('https://imdb.com');
    let logo = await $('#home_img_holder');
    assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB website');

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

  /*this.Given(/^I have selected the Celebs filter from the drop down menu$/, async function () {
      let filterButton = await $('#nav-search-form > div.search-category-selector.sc-htoDjs.jAJuqP > div > label > div > svg');
      filterButton.click();
      let celebsButton = await $('#nav-search-form > div.search-category-selector.sc-htoDjs.jAJuqP > div > label > div > svg')
      celebsButton.click()
      assert(celebsButton, 'Expected the Celebs filter to be chosen');*/

  this.Given(/^I have selected the "([^"]*)" filter from the drop down menu$/, async function (filterName) {
    let button = await $('.search-category-selector');
    await button.click();
    let filterLink = await $('.search-category-selector a[aria-label="' + filterName + '"]');
    await filterLink.click();
    await sleep(1000);
  });

  this.Given(/^that i am at the IMDB website$/, async function () {
    await helpers.loadPage('https://imdb.com');
    let logo = await $('#home_img_holder');
    assert(logo, 'Expected the IMDB logo to prove that I am on the IMDB website');
  });

  this.Given(/^i have selected the "([^"]*)" filter from the drop down menu$/, async function (filterName) {
    let Titlesbutton = await $('.ipc-icon--arrow-drop-down')
    await Titlesbutton.click();
    let TitleLink = await driver.findElement(by.linkText("Titles"))
    await TitleLink.click();

  });
  this.When(/^i enter "([^"]*)" in the search field and hit enter$/, async function (userSearch) {
    let searchbox = await $('#suggestion-search')
    console.log("HEJ", userSearch)
    await searchbox.sendKeys(userSearch, selenium.Key.ENTER)
  });

  this.Then(/^i get a list of results and click on the first result that comes up$/, async function () {
    // wait for search results to show
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    // get all results
    let allResults = await $('.findResult');
    // check that we have at least one result
    assert(allResults.length > 0, "No search results...");
    // get the link element inside the first result
    let firstResultLink = allResults[0].findElement(By.css('a'));
    // click the link
    await firstResultLink.click();
    await sleep(4000)
  });



}