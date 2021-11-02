Feature: Simple plain test
  In order to be a simple test as boilerplate
  As a developer, use this as an sample file

  Scenario: API Server is up and running
    Given When I make a GET request to "http://localhost:3000/is-server-up"
    When I get a request
    Then response code must be 200
    And response must be json
    And response must have "status" of "RUNNING"