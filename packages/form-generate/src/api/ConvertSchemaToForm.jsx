/**
 * @name EntityForms
 * @description Read from schema and generate entity form module exports.
 */

const React = require('react')
const Form = require('./FormDynamic').default

/* --- Map Schema List --- */
const GenerateForms = (schema) => {
  let Forms = {}
  Object.values(schema)
    .forEach(entity => {
      Forms[entity.object] = {
        standard: <Form schema={entity} />
      }
    })
  return Forms
}

module.exports = GenerateForms