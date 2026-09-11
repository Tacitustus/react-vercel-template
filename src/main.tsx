import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App';

import '@/styles/globals.css';

// ルート要素を取得してアプリケーションをマウントする
const rootElement = document.getElementById('root');

// ルート要素が存在しない場合はエラーを投げる
if (!rootElement) {
  throw new Error('Root element not found. index.html に id="root" の要素が必要です。');
}

// React アプリケーションをレンダリングする
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
