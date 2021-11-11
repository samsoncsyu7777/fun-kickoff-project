const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");

chai.should();
chai.use(chaiHttp);

describe("Pinging the Logout controller: GET /logout", () => {
  it("it should return 200 and logout response", (done) => {
    chai
      .request(app.server)
      .get(`/auth/logout`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have
          .property("text")
          .eql("You have successfully logged out");
        done();
      });
  });
});
