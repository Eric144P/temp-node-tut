// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const alternativeData = require("./6-alternative-way");
require("./7-mind-grenade");

sayHi("susan");
sayHi(names.peter);
sayHi(names.john);
