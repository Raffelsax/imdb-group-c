Feature: IMDB Sing in

    -Be able to sing in to a account
    -Then also have access to the features as a acount user


    Scenario: Sign in with IMDb
        Given that I am at the IMDb sing in option page
        When click the on Sing in with IMDb
        And type in the email : "anton.fransen@hotmail.com"
        And type in the password : "gifflar125"
        And click sing in
        Then I should get singnd in

    Scenario: Sign in with IMDb
        Given that I am at the IMDb sing in option page
        When click the on Sing in with IMDb
        And type in the email : "anton.fransen@hotmail.com"
        And type in the password : "gifflar125" + hit ENTER
        Then I should get singnd in



