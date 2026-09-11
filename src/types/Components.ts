/**
 * @description ボタンコンポーネントの Props 型定義
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * @description ボタンのサイズ定義
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * @description ボタンコンポーネントの Props
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンのバリアント（見た目のスタイル） */
  variant?: ButtonVariant;
  /** ボタンのサイズ */
  size?: ButtonSize;
  /** 子要素 */
  children: React.ReactNode;
}

/**
 * @description インプットコンポーネントの Props
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** ラベルテキスト */
  label?: string;
  /** エラーメッセージ */
  error?: string;
}

/**
 * @description 検索バーコンポーネントの Props
 */
export interface SearchBarProps {
  /** プレースホルダーテキスト */
  placeholder?: string;
  /** 検索実行時のコールバック */
  onSearch: (query: string) => void;
}

/**
 * @description ナビゲーションリンクの型定義
 */
export interface NavLink {
  /** リンクのラベル */
  label: string;
  /** リンク先のパス */
  href: string;
}

/**
 * @description ヘッダーコンポーネントの Props
 */
export interface HeaderProps {
  /** ナビゲーションリンクの配列 */
  navLinks?: NavLink[];
}

/**
 * @description デフォルトレイアウトの Props
 */
export interface DefaultLayoutProps {
  /** 子要素（ページコンテンツ） */
  children: React.ReactNode;
}
