Feature: Part of Imdb-search

  Scenario Outline: Search for a title using the "Titles" filter
    Given that i am at the IMDB website
    And i have selected the "Titles" filter from the drop down menu
    When i enter <userSearch> in the search field and hit enter
    Then i get a list of results and click on the first result that comes up
    
    Examples:

      | userSearch        |
      | "The dark knight" |


