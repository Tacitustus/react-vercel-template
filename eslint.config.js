import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  // グローバル無視パターン
  {
    ignores: ['dist/**', 'node_modules/**', 'postcss.config.cjs'],
  },

  // JavaScript の推奨ルール
  js.configs.recommended,

  // TypeScript の推奨ルール（型チェック付き）
  ...tseslint.configs.recommendedTypeChecked,

  // Prettier との競合を解消するルール
  prettierConfig,

  // プロジェクト共通の設定
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React プラグインの推奨ルール
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,

      // React Hooks プラグインの推奨ルール
      ...reactHooksPlugin.configs.recommended.rules,

      // アクセシビリティプラグインの推奨ルール
      ...jsxA11yPlugin.configs.recommended.rules,

      // any 型の使用を禁止
      '@typescript-eslint/no-explicit-any': 'error',

      // 未使用変数の警告（_ プレフィックスは許可）
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // React のインポート不要（React 17+ JSX Transform）
      'react/react-in-jsx-scope': 'off',

      // Props の型チェック（TypeScript で代替するため無効化）
      'react/prop-types': 'off',

      // アクセシビリティルール
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },
);
