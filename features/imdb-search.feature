Feature: IMDB-search

    As a movie buff
    I would like to search for movies.

    Scenario Outline: Search for keywords using the "All" filter
        Given that I am at the IMDB website
        And I have selected the All filter from the drop down menu
        When I enter <userSearch> in the search field
        And I click the search button
        Then I get a list of results

        Examples:
            | userSearch     |
            | "Avatar"       |
            | "Breaking Bad" |

    Scenario Outline: Search for keywords using the "Celebs" filter
        Given that I am at the IMDB website
        And I have selected the Celebs filter from the drop down menu
        When I enter <userSearch> in the search field
        And I click the search button
        Then I get a list of results

        Examples:
            | userSearch    |
            | "Ben Affleck" |
            | "Halle Berry" |
            | "Avatar"      |

    Scenario Outline: Search for keywords using the "Keyword" filter
        Given that I am at the IMDB website
        And I have selected the Keyword filter from the drop down menu
        When I enter <userSearch> in the search field
        And I click the search button
        Then I get a list of results

        Examples:
            | userSearch |
            | "Cars"     |
            | "Clown"    |



