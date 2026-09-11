import { create } from 'zustand';

/**
 * @description アプリケーション全体で共有するグローバルステートの型定義
 */
interface AppState {
  /** ダークモードが有効かどうか */
  isDarkMode: boolean;
  /** ダークモードを切り替える */
  toggleDarkMode: () => void;
  /** ダークモードを設定する */
  setDarkMode: (value: boolean) => void;
}

/**
 * @description アプリケーション全体のグローバルステートを管理するストア
 * @returns {AppState} アプリケーションの状態と操作メソッド
 * @example
 * ```tsx
 * const { isDarkMode, toggleDarkMode } = useAppStore();
 * ```
 */
export const useAppStore = create<AppState>((set) => ({
  // ダークモードの初期値はシステム設定に従う
  isDarkMode:
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches,

  // ダークモードのトグル処理
  toggleDarkMode: () =>
    set((state) => {
      const newValue = !state.isDarkMode;
      // HTML要素にダークモードクラスを適用する
      document.documentElement.classList.toggle('dark', newValue);
      return { isDarkMode: newValue };
    }),

  // ダークモードを直接設定する処理
  setDarkMode: (value: boolean) =>
    set(() => {
      // HTML要素にダークモードクラスを適用する
      document.documentElement.classList.toggle('dark', value);
      return { isDarkMode: value };
    }),
}));
