Feature: Find different credits after a search

    Search for an actor, director, producer etc. and see if they have any other additional credits


    Scenario Outline:See if an actor has any other credits:
        Given that I am at the IMDB website
        When I have selected the Celebs from the drop down menu next to the search bar
        When I enter <name> in the searchbox and hit enter
        And I click on the first result for <name>
        Then I should see credits under <name>´s filmography

        Examples:
            | name                    |
            | "Arnold Schwarzenegger" |
            | "John Krasinski"        |



