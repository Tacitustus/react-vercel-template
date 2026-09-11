import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/components/pages/HomePage';
import { DefaultLayout } from '@/components/templates/DefaultLayout';

/**
 * @description アプリケーションのルートコンポーネント。ルーティング設定を管理する。
 * @returns アプリケーション要素
 * @example
 * ```tsx
 * <App />
 * ```
 */
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* デフォルトレイアウトを適用するルートグループ */}
        <Route element={<DefaultLayout />}>
          {/* ホームページ */}
          <Route path="/" element={<HomePage />} />
          {/* 新しいページはここに追加する */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
