Feature: IMDB Top Rated Movies

   As a user 
   I would like a list of the top user rated movies on IMDB

   Scenario: Get the list of movies
   Given that I am at the IMDB homepage
   And I have clicked on the menu button
   And I have clicked on top rated movies
   Then I should be taken to the page with the list of top rated movies

   Scenario: Sort list by number of ratings
   Given that I am on the top rated movies page
   When I select sort by number of ratings in the sort by box
   Then the list should resort by number of ratings

   