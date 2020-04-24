module.exports = {
  extends: ['airbnb-base', '../common.js'],
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: [
          'invalidHref'
        ]
      }
    ],
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: [
          'Label'
        ],
        required: {
          some: [
            'nesting',
            'id'
          ]
        },
        allowChildren: false
      }
    ],
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index']
        ]
      }
    ],
  },
  overrides: [],
  plugins: [
    'import',
    'jsx-a11y'
  ],
}
