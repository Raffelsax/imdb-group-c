Feature: IMDB Top Rated Movies

   As a user 
   I would like a list of the top user rated movies on IMDB

   Background: Get the list of movies
    Given that I am at the IMDB homepage
    And I have clicked on the menu button
    And I have clicked on top rated movies
    And that I am on the top rated movies page sorted by ranking


   Scenario: Sort list by IMDB ratings
      
      When I select sort by IMDB ratings in the sort-by box
      Then the list should resort by IMDB ratings


   Scenario: Sort list by release date
      
      When I select sort by release date in the sort-by box
      Then the list should resort by release date


   Scenario: Sort list by number of ratings
      When I select sort by number of ratings in the sort-by box
      Then the list should sort by number of ratings

   