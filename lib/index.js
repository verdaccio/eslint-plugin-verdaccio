'use strict';

module.exports = {
  configs: {
    recommended: {
      plugins: ['verdaccio'],
      rules: {
        'verdaccio/jsx-spread': 'error'
      }
    }
  },
  rules: {
    'jsx-spread': require('./rules/jsx-spread'),
    'no-style': require('./rules/no-style')
  },
  rulesConfig: {
    'jsx-spread': 2,
    'no-style': 2
  }
};
