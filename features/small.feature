Feature: Part of Imdb-search

  Scenario Outline: Search for celeb using the "Celebs" filter
    Given that I am at the IMDB website
    And I have selected the "Celebs" filter from the drop down menu
    When I enter <userSearch> in the search field
    And I click the search button
    Then I get a list of results

    Examples:
      | userSearch    |
      | "Ben Affleck" |