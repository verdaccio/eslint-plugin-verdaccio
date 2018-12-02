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
    'jsx-spread': require('./rules/jsx-spread')
  },
  rulesConfig: {
    'jsx-spread': 2
  }
};
