import { Heart } from 'lucide-react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/organisms/Header';
import { APP_NAME } from '@/constants/app';

/**
 * @description デフォルトレイアウトテンプレート。Header + main コンテンツ + Footer の3層構造。
 * @returns レイアウト要素
 * @example
 * ```tsx
 * // React Router のレイアウトルートとして使用する
 * <Route element={<DefaultLayout />}>
 *   <Route path="/" element={<HomePage />} />
 * </Route>
 * ```
 */
export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ領域 */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-surface-dark/80">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4 py-6 text-sm text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} {APP_NAME}. Made with</span>
          <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-hidden="true" />
        </div>
      </footer>
    </div>
  );
};
