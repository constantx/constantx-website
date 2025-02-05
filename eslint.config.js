import tseslint from 'typescript-eslint';
import parserTs from '@typescript-eslint/parser';
import importNewlines from 'eslint-plugin-import-newlines';
import astro from 'eslint-plugin-astro';
import stylistic from '@stylistic/eslint-plugin';

export default [
  // Recommended configs from typescript-eslint
  ...tseslint.configs.recommended,

  // Astro files configuration
  ...astro.configs.base,
  {
    files: ['**/*.astro'],
    plugins: {
      astro,
    },
    rules: {
      'astro/prefer-class-list-directive': ['warn'],
      'astro/prefer-object-class-list': ['warn'],
    },
  },

  // TypeScript/JavaScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      'import-newlines': importNewlines,
      '@stylistic': stylistic,
    },
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      'arrow-parens': ['warn'],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'camelcase': ['error'],
      'comma-dangle': ['warn', 'always-multiline'],
      'comma-style': ['error', 'last'],
      'complexity': ['warn', 8],
      'consistent-return': ['off'],
      'default-case': ['error'],
      'dot-notation': ['error', { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }],
      'eol-last': ['off'],
      'func-names': ['off'],
      'func-style': ['warn', 'declaration'],
      'global-require': ['warn'],
      'guard-for-in': ['error'],
      'jsx-quotes': ['warn', 'prefer-double'],
      'keyword-spacing': ['error'],
      'max-depth': ['warn', 2],
      'max-statements': ['warn', 30],
      'no-console': ['warn'],
      'no-continue': ['warn'],
      'no-floating-decimal': ['error'],
      'no-mixed-requires': ['warn'],
      'no-nested-ternary': ['warn'],
      'no-octal': ['off'],
      'no-param-reassign': ['warn'],
      'no-plusplus': ['warn'],
      'no-underscore-dangle': ['off'],
      'no-use-before-define': ['error'],
      'object-shorthand': ['error', 'always'],
      'padded-blocks': ['warn', 'never'],
      'prefer-arrow-callback': ['warn'],
      'prefer-const': ['off'],
      'prefer-template': ['warn'],
      'quote-props': ['off'],
      'quotes': ['warn', 'single'],
      'radix': ['error'],
      'space-before-blocks': ['error', 'always'],
      'space-in-parens': ['warn'],
      'spaced-comment': ['warn', 'always', { 'exceptions': ['*'] }],
      'wrap-iife': ['error'],

      // typescript
      '@typescript-eslint/no-unused-vars': ['warn'],
      
      // PLUGIN `eslint-plugin-react`
      // 'react/no-unknown-property': [0],
      // 'react/react-in-jsx-scope': [0],
      // 'react/destructuring-assignment': ['warn'],
      // 'react/jsx-max-props-per-line': ['warn', { 
      //   'maximum': 1,
      //   'when': 'multiline',
      // }],
      // 'react/jsx-closing-tag-location': ['warn'],
      // 'react/jsx-curly-newline': ['warn', {
      //   'multiline': 'consistent',
      //   'singleline': 'consistent',
      // }],
      // 'react/jsx-curly-spacing': ['warn', { 
      //   'when': 'never', 
      //   'children': true,
      // }],
      // 'react/jsx-equals-spacing': ['error', 'never'],
      // 'react/jsx-tag-spacing': ['warn', {
      //   'closingSlash': 'never',
      //   'beforeSelfClosing': 'always',
      //   'afterOpening': 'never',
      //   'beforeClosing': 'proportional-always',
      // }],
      // 'react/jsx-wrap-multilines': ['warn', {
      //   'declaration': 'parens-new-line',
      //   'assignment': 'parens-new-line',
      //   'return': 'parens-new-line',
      //   'arrow': 'parens-new-line',
      //   'condition': 'parens-new-line',
      //   'logical': 'parens-new-line',
      //   'prop': 'parens-new-line',
      // }],

      // PLUGIN `eslint-plugin-import-newlines`
      // https://github.com/SeinopSys/eslint-plugin-import-newlines
      'import-newlines/enforce': ['error', { 
        'items': 3,
        'max-len': 70,
        'forceSingleLine': true,
      }],

      // PLUGIN `@stylistic/eslint-plugin-ts`
      '@stylistic/indent': ['error', 2, { 'SwitchCase': 1 }],
      '@stylistic/max-len': ['warn', {
        'code': 80,
        'tabWidth': 2,
        'ignoreUrls': true,
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignorePattern': '^(\\s*\\w+\\s*=\\s*\\{\\s*\\w+\\s*\\}\\s*)+$',
        'ignoreRegExpLiterals': true,
      }],
      '@stylistic/object-curly-newline': ['error', {
        'ObjectExpression': { 
          'minProperties': 2, 
          'multiline': true, 
          'consistent': true,  
        },
        'ObjectPattern': { 
          'minProperties': 2, 
          'multiline': true, 
          'consistent': true,  
        },
        'ExportDeclaration': { 'minProperties': 1 },
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/jsx-indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
    },
  },
];

