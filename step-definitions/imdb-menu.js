let { $, sleep } = require('./funcs');

module.exports = function () {

    let searchfield;

    this.Given(/^that I am at the IMDB homepage$/, async function () {
        await helpers.loadPage('https://www.imdb.com/?ref_=nv_home');
        await sleep(1000)
        searchField = await $('div.aux-content-widget-2:nth-child(7) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1) > a:nth-child(1) > h3:nth-child(1)')
        assert.instanceOf(searchField, searchField.constructor, "Expected a web element")
    });

}