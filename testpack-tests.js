// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by testpack.js.
import { name as packageName } from "meteor/chandrantwins:testpack";

// Write your tests here!
// Here is an example.
Tinytest.add('testpack - example', function (test) {
  test.equal(packageName, "testpack");
});
