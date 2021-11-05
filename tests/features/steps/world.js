const pactum = require("pactum");
const { setWorldConstructor, BeforeAll, AfterAll } = require("@cucumber/cucumber");

let server = null;

class CustomWorld {
  constructor() {
    pactum.settings.setLogLevel("SILENT");
    pactum.settings.setLogger(
      {
        trace(messages) {   /* custom code */ },
        debug(messages) {   /* custom code */ },
        info(messages) {    /* custom code */ },
        warn(messages) {    /* custom code */ },
        error(messages) {   /* custom code */ }
      }
    );
    this.spec = pactum.spec();
    this.url = "";

  }

  setUrl(url) {
    this.url = url;
  }
}

BeforeAll(function (done) {
  server = require('../../../bin/www');
  server.on("listening", function () {
    done();
  });
});

AfterAll(function (done) {
  server.close(function () {
    done();
  });
});

setWorldConstructor(CustomWorld);