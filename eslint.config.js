import js from '@eslint/js';
import reactConfig from '@rocketseat/eslint-config/react'; // Importa as configurações da Rocketseat
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptParser from '@typescript-eslint/parser'; // Configuração para TypeScript
import globals from 'globals'; // Para configurar os globals corretamente no ambiente de browser

export default [
  {
    extends: [
      reactConfig, // Usa as regras do Rocketseat para React
      js.configs.recommended, // Configurações recomendadas para JavaScript
      '@typescript-eslint/recommended', // Configuração recomendada para TypeScript
    ],
    parser: typescriptParser, // Usa o parser do TypeScript
    parserOptions: {
      ecmaVersion: 2020, // Especificando a versão do ECMAScript
    },
    plugins: {
      'react-hooks': reactHooks, // Adiciona o plugin de hooks do React
      'react-refresh': reactRefresh, // Para gerenciamento de componentes React com HMR
    },
    globals: {
      ...globals.browser, // Configura o ambiente de browser
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...reactHooks.configs.recommended.rules, // Regras recomendadas para React Hooks
    },
    overrides: [
      {
        files: ['**/*.{ts,tsx}'], // Aplica para arquivos .ts e .tsx
        rules: {
          // Outras regras específicas para TypeScript podem ser adicionadas aqui
        },
      },
    ],
  },
];
