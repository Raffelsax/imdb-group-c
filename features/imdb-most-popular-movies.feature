Feature: IMDB Most Popular Movies

    As a user
    I would like a list of the top 100 most popular movies

    Scenario: Get the list of movies
        Given that I am at the IMDB homepage
        And I have clicked on the menu button
        And I have clicked on most popular movies
        Then I should be taken to the page with the list of the 100 most popular movies


    Scenario: Sort list by ranking
        Given that I am on the popular movies page
        When I select sort by ranking in the sort-by box
        Then the list should sort by ranking


    Scenario: Sort list by IMDB ratings
        Given that I am on the popular movies page
        When I select sort by IMDB ratings in the sort-by box
        Then the list should resort by IMDB ratings


    Scenario: Sort list by release date
        Given that I am on the popular movies page
        When I select sort by release date in the sort-by box
        Then the list should resort by release date

    
    Scenario: Sort list by number of ratings
        Given that I am on the popular movies page
        When I select sort by number of ratings in the sort-by box
        Then the list should sort by number of ratings

    
  

    
   







