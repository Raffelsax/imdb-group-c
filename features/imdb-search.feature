Feature: IMDB-search

    As a movie buff
    I would like to search for movies.

    Scenario Outline: Search for a movie
        Given that I am on the IMDB website
        And that I am on the IMDB homepage.
        When I enter the <movie_name> in a search field
        And i click the search button
        Then I find the corresponding <movie_name> in the search results.

        Examples:
            | movie_name   |
            | "Antz"     |
            | "A Bug's Life" |


