import { useCallback, useEffect, useState } from 'react';

/**
 * @description メディアクエリの一致状態を監視するカスタムフック
 * @param query - メディアクエリ文字列（例: '(min-width: 768px)'）
 * @returns メディアクエリが一致しているかどうかの boolean 値
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 767px)');
 * const isDarkPreferred = useMediaQuery('(prefers-color-scheme: dark)');
 * ```
 */
export const useMediaQuery = (query: string): boolean => {
  // メディアクエリの一致状態を管理する（初期値はクエリの現在の状態）
  const [matches, setMatches] = useState<boolean>(() => {
    // SSR 対応: window がない場合は false を返す
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  // メディアクエリの変更を検知するコールバック
  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    // メディアクエリリストを作成する
    const mediaQueryList = window.matchMedia(query);

    // 変更イベントリスナーを登録する
    mediaQueryList.addEventListener('change', handleChange);

    // クリーンアップ: イベントリスナーを解除する
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query, handleChange]);

  return matches;
};
