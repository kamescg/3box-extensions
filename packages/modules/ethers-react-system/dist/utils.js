"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeLogs = void 0;

var decodeLogs = (log, contractEventsInterface) => {
  // Cleanup Logs
  var cleaned = {};
  var decoded = contractEventsInterface.decode(log.data, log.topics);
  contractEventsInterface.inputs.forEach((input, i) => {
    if (input.type === "uint256") {
      //todo
      var x = decoded[input.name];
      cleaned[input.name] = x.toString(); //todo
    } else {
      cleaned[input.name] = decoded[input.name];
    }
  });
  log.decoded = cleaned;
  return log;
};

exports.decodeLogs = decodeLogs;