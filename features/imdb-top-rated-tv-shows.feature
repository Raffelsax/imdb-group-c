Feature: IMDB Top Rated TV shows

   As a user
   I would like a list of the top user rated TV shows on IMDB

   Background: List the top rated TV shows
      Given that i am on the IMDB front page
      And i have clicked on the menu button
      And i have clicked on top rated shows
      And that I am on the top rated TV shows page

   Scenario: Sort list by IMDB rating
      When I select sort by IMDB rating in the sort by box
      Then the list should be sorted by IMDB rating

   Scenario: Sort list by number of ratings
      When I select sort by number of ratings in the sort by box
      Then the list should be sorted by number of ratings

   Scenario: Sort list by release date
      When I select sort by release date in the sort by box
      Then the list should be sorted by release date

   Scenario: Sort list by release date
      When I select sort by release date in the sort by box
      Then the list should be sorted by release date

