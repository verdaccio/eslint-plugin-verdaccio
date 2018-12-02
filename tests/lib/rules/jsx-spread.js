/**
 * @fileoverview spread over jsx
 * @author verdaccio
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
const rule = require('../../../lib/rules/jsx-spread'),

  RuleTester = require('eslint').RuleTester;


// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

const ruleTester = new RuleTester({parserOptions});
ruleTester.run('jsx-spread', rule, {

  valid: [
    '<div foo="1" bar="1"/>',
    '<div/>',
    '<div foo bar/>'
  ],

  invalid: [
    {
      code: '<div {...props}/>',
      errors: [{
        message: 'spread operator are not allowed on jsx components.',
        type: 'JSXOpeningElement'
      }]
    },
    {
        code: '<div foo {...props}/>',
        errors: [{
          message: 'spread operator are not allowed on jsx components.',
          type: 'JSXOpeningElement'
        }]
    }
  ]
});
