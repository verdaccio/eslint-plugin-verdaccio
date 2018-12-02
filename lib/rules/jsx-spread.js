/**
 * @fileoverview spread over jsx
 * @author verdaccio
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
const hasProp = require('jsx-ast-utils/hasProp');

module.exports = {
  meta: {
    docs: {
      description: 'spread over jsx',
      category: 'Stylistic Issues',
      recommended: true
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
        {
            "enum": ["always", "never"]
        }
    ]
  },

  create: function(context) {
    // variables should be defined here
    const configuration = context.options[0] || "never";
    const configObject = context.options[1] || {};

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
        JSXOpeningElement: function(node) {
            if (node.attributes.length === 0) {
                return;
            }

            node.attributes.some(decl => {
                if (decl.type === 'JSXSpreadAttribute') {
                    context.report({
                        node: node,
                        message: `spread operator are not allowed on jsx components.`,
                      });
                    return true;
                }
            });

            return;
        }

    };
  }
};
