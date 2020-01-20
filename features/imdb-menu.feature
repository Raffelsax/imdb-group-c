Feature: IMDB Menu

-Lists several main categories. For example TV, Movies, Tickets, Celebs etc..
-Under each main category, lists many subcategories 
-Easy to search and many interesting topics and subtopics


    Scenario: Get the list of the top 250 movies
        Given that I am at the IMDB homepage
        And I have clicked on the menu button
        And I have clicked on top rated movies
        Then I should be taken to the page with the list of top rated movies

    Scenario: Sort top 250 movies list by number of ratings
        Given that I am on the top rated movies page
        When I select sort by number of ratings in the sort by box
        Then the list should resort by number of ratings

    Scenario: Get the list of the most popular movies
    Given that I am at the IMDB homepage
    And I have clicked on the munu button
    And I have clicked on Most Popular Movies
    Then I should be directed to the Most Popular Movies page