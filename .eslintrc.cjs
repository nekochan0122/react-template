const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: false,
  jsx: true,
})


module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'react-refresh',
     'import',
     'simple-import-sort',
     '@stylistic'
    ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  settings: {
    tailwindcss: {
      callees: ['cx'],
      config: 'tailwind.config.ts',
      cssFiles: [
        'src/styles/*.css',
        '!**/node_modules',
        '!**/.*',
      ],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      tags: [],
      classRegex: '^class(Name)?$',
    },
  },
  rules: {
    ...customized.rules,
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],

    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],

    'react/react-in-jsx-scope': 'off',

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/newline-after-import': ['error', { count: 1 }],

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w', '^@?\\w.*\\u0000$'],
          ['(?<!\\u0000)$', '(?<=\\u0000)$'],
          ['^\\.', '^\\..*\\u0000$'],
        ],
      },
    ],
  },
}
