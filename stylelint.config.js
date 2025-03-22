/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: ['/external//*.css'],
  rules: {
    'no-invalid-position-at-import-rule': null,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements']
      }
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['/A[0-9][0-9][0-9]/', 'optimizeLegibility']
      }
    ],
    'function-name-case': null,
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [],
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': true,
    'scss/double-slash-comment-empty-line-before': 'always',
    'scss/double-slash-comment-inline': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always'
  }
}
