const Geekt = artifacts.require("Geekt.sol");

module.exports = function (deployer) {
  deployer.deploy(Geekt);
};