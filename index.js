module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    // import { Foo } from 'Foo';   ->   import type { Foo } from 'Foo';
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],

    // disable console.log()
    'no-console': [
      'error',
      { allow: ['warn', 'error', 'info'] },
    ],

    // const str = count + ' times';   ->   const str = `${count} times';
    'prefer-template': 'error',

    // import { B, A, C } from 'foo';   ->   import { A, B, C } from 'foo';
    'sort-imports': [
      'error',
      { ignoreDeclarationSort: true },
    ],
  },
}
