const path = require('path');

module.exports = {
  'root': true,
  'extends': [
  	'airbnb',
  ],
  'parser': 'babel-eslint',
	'env': {
      'browser': true,
		  'commonjs': true,
		  'es6': true,
	},
	'parserOptions': {
		'ecmaVersion': 8,
	},
	'settings': {
	  'import/resolver': {
      'node': {
        'moduleDirectory': [
          'node_modules',
          'src',
        ],
      },
	  },
	},
};
