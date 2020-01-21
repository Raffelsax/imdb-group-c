Feature: IMDB-search

    As a fan of movies and Tv series

    Scenario Outline: Search for keywords using the "All" filter
        Given that I am at the IMDB website
        And I have selected the "All" filter from the drop down menu
        When I enter <userSearch> in the search field
        And I click the search button
        Then I get a list of results

        Examples:
            | userSearch     |
            | "Avatar"       |
            | "Breaking Bad" |

    Scenario Outline: Search for keywords using the "Celebs" filter
        Given that I am at the IMDB website
        And I have selected the "Celebs" filter from the drop down menu
        When I enter <userSearch> in the search field
        And I click the search button
        Then I get a list of results

        Examples:
            | userSearch    |
            | "Ben Affleck" |
            | "Halle Berry" |
            | "Avatar"      |

    Scenario Outline: Search for keywords using the "Keywords" filter
        Given that I am at the IMDB website
        And I have selected the "Keywords" filter from the drop down menu
        When I enter <userSearch> in the search field
        And I click the search button
        Then I get a list of results

        Examples:
            | userSearch |
            | "Cars"     |
            | "Clown"    |


    Scenario Outline: Search for a Tv Episode using the "Tv Episodes" filter
        Given that i am at the IMDB website
        And i have selected the "Tv Episodes" filter from the drop down menu
        When i enter <userSearch> in the search field
        And i click the search button
        Then i get a list of results

        Examples:

            | userSearch         |
            | "The Kardashians"  |
            | "The Walking Dead" |








