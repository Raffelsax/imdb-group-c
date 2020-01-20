Feature: IMDB Most Popular Movies

    As a user
    I would like a list of the top 100 most popular movies

    Background: Get the list of movies
        Given that I am at the IMDB homepage
        And I have clicked on the menu button
        And I have clicked on most popular movies
        And that I am on the popular movies page


    Scenario: Sort list by ranking
        When I select sort by ranking in the sort-by box
        Then the list should sort by ranking


    Scenario: Sort list by IMDB ratings
        When I select sort by IMDB ratings in the sort-by box
        Then the list should resort by IMDB ratings


    Scenario: Sort list by release date
        When I select sort by release date in the sort-by box
        Then the list should resort by release date

    
    Scenario: Sort list by number of ratings
        When I select sort by number of ratings in the sort-by box
        Then the list should sort by number of ratings

    
  

    
   







