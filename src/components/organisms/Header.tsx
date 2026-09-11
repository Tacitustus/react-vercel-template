import { useState } from 'react';

import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/atoms/Button';
import { APP_NAME, NAV_LINKS } from '@/constants/app';
import { useAppStore } from '@/stores/useAppStore';
import { cn } from '@/utils/cn';

/**
 * @description ヘッダーコンポーネント。ナビゲーションとダークモード切り替えを含む organism。
 * @returns ヘッダー要素（ロゴ、ナビゲーション、ダークモードトグル、モバイルメニュー）
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export const Header = () => {
  // ダークモードの状態とトグル関数を取得する
  const { isDarkMode, toggleDarkMode } = useAppStore();

  // モバイルメニューの開閉状態を管理する
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 現在のルートパスを取得する
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl dark:bg-surface-dark/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ロゴ・アプリ名 */}
        <Link
          to="/"
          className="gradient-text text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          {APP_NAME}
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="メインナビゲーション">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                // ベーススタイル
                'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                // ホバー時のスタイル
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                // アクティブ状態のスタイル
                location.pathname === link.href
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400',
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* ダークモード切り替えボタン */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>
        </nav>

        {/* モバイルメニューボタン */}
        <div className="flex items-center gap-2 md:hidden">
          {/* ダークモード切り替えボタン（モバイル） */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>

          {/* ハンバーガーメニューボタン */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* モバイルナビゲーションメニュー */}
      {isMobileMenuOpen && (
        <nav
          className="animate-slide-down border-t border-gray-200 bg-white/95 backdrop-blur-xl dark:border-gray-700 dark:bg-surface-dark/95 md:hidden"
          aria-label="モバイルナビゲーション"
        >
          <div className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200',
                  location.pathname === link.href
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
