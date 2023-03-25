const peopleName = require("../country/state/city/index.js");
const getPeopleName = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleName) => {
  return getPeopleName(peopleName);
};
module.exports = getPeopleInCity;
