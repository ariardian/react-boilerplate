import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config(
  { ignores: ['dist', 'node-modules'] },
  {
    // specify the formats on which to apply the rules below
    files: ['**/*.{ts,tsx}'],
    // use predefined configs in installed eslint plugins
    extends: [
      // js
      js.configs.recommended,
      // ts
      ...tseslint.configs.recommended,
      // react
      react.configs.flat.recommended,
      // import
      importPlugin.flatConfigs.recommended,
      // a11y (accessibility
      jsxA11y.flatConfigs.recommended,
      // prettier
      prettier
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    // specify used plugins
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort
    },
    settings: {
      // for eslint-plugin-react to auto detect react version
      react: {
        version: 'detect'
      },
      // for eslint-plugin-import to use import alias
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },
    rules: {
      // set of custom rules
      'no-console': 'warn',
      'react/button-has-type': 'error',
      'react/react-in-jsx-scope': ['off'],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ],
      'simple-import-sort/exports': 'error',
      'prettier/prettier': ['error', { printWidth: 80 }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '**/*.scss',
              group: 'internal',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['react', '**/*.scss'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: false
          },
          warnOnUnassignedImports: true
        }
      ]
    }
  }
)
