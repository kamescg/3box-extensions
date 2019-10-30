"use strict";

/**
 * @name EntityForms
 * @description Read from schema and generate entity form module exports.
 */
var React = require('react');

var Form = require('./FormDynamic')["default"];
/* --- Map Schema List --- */


var GenerateForms = function GenerateForms(schema) {
  var Forms = {};
  Object.values(schema).forEach(function (entity) {
    Forms[entity.object] = {
      standard: React.createElement(Form, {
        schema: entity
      })
    };
  });
  return Forms;
};

module.exports = GenerateForms;