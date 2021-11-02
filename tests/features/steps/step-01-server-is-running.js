const pactum = require('pactum');
const { Given, When, Then } = require("@cucumber/cucumber");

Given('When I make a GET request to {string}', function (string) {
  this.setUrl(string);
  this.spec.get(string);
});

When('I get a request', async function () {
  await this.spec.toss();
});

Then('response code must be {int}', function (statusCode) {
  this.spec.response().to.have.status(statusCode);
});

Then('response must be json', function () {
  this.spec.response().to.have.jsonSchema({ type: 'object' });
  this.spec.response().to.have.jsonLike({
    status: "RUNNING"
  });
});

Then('response must have {string} of {string}', function (path, value) {
  this.spec.response().to.have.json(path, value);
});