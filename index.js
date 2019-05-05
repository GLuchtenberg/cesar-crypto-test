const robots = {
  cesar: require("./services/cesar"),
  state: require("./services/state"),
  sha1: require("./services/sha1")
};
const data = require("./data.json");

function start() {
  robots.cesar(data);
  robots.sha1(data);
  robots.state.save(data);
}

start();
