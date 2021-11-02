Feature: Simple plain test with multiple data
  To demonstrate how to use "Examples" in "Scenario Outline"

  Scenario Outline: API Server is up and running with multiple uri checking
    Given When I make a GET request to "<server_url>"
    When I get a request
    Then response code must be <statusCode>
    And response must be json
    And response must have "<fieldToCheck>" of "<valueToCheck>"

    Examples:
      | server_url                 | statusCode | fieldToCheck | valueToCheck  |
      | http://localhost:3000/uri1 | 201        | name         | Administrator |
      | http://localhost:3000/uri2 | 200        | book.title   | Gherkin book  |
      | http://localhost:3000/uri3 | 200        | book.year    | 2023          |