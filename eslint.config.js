import tseslint from 'typescript-eslint';
import parserTs from '@typescript-eslint/parser';
import importNewlines from 'eslint-plugin-import-newlines';
import astro from 'eslint-plugin-astro';
import stylistic from '@stylistic/eslint-plugin';

export default [
  // Recommended configs from typescript-eslint
  ...tseslint.configs.recommended,

  // ESLint config file itself
  {
    files: ['eslint.config.js'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'space-before-blocks': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'keyword-spacing': ['error'],
      'comma-dangle': ['warn', 'always-multiline'],
    },
  },

  // Astro files configuration
  ...astro.configs.recommended,
  {
    rules: {
      // Astro-specific rules
      'astro/prefer-class-list-directive': ['warn'],
      'astro/prefer-object-class-list': ['warn'],
      'indent': ['error', 2],
      'no-unused-vars': ['warn'],
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
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      camelcase: ['error'],
      'comma-dangle': ['warn', 'always-multiline'],
      'comma-style': ['error', 'last'],
      complexity: ['warn', 8],
      'consistent-return': ['off'],
      'default-case': ['error'],
      'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
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
      'quotes': ['error', 'single', { avoidEscape: true }],
      'radix': ['error'],
      'space-before-blocks': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'spaced-comment': ['warn', 'always', { exceptions: ['*'] }],
      'wrap-iife': ['error'],

      // typescript
      '@typescript-eslint/no-unused-vars': ['warn'],

      // PLUGIN `eslint-plugin-import-newlines`
      // https://github.com/SeinopSys/eslint-plugin-import-newlines
      'import-newlines/enforce': [
        'error',
        {
          items: 3,
          'max-len': 70,
          forceSingleLine: true,
        },
      ],

      // PLUGIN `@stylistic/eslint-plugin-ts`
      '@stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
        },
      ],
      '@stylistic/jsx-indent-props': ['error', 2],
      '@stylistic/max-len': [
        'warn',
        {
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignorePattern: '^(\\s*\\w+\\s*=\\s*\\{\\s*\\w+\\s*\\}\\s*)+$',
          ignoreRegExpLiterals: true,
        },
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            minProperties: 2,
            multiline: true,
            consistent: true,
          },
          ObjectPattern: {
            minProperties: 2,
            multiline: true,
            consistent: true,
          },
          ExportDeclaration: { minProperties: 1 },
        },
      ],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/jsx-indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
    },
  },
];
