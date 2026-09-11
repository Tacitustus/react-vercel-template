import { forwardRef } from 'react';

import { cn } from '@/utils/cn';

import type { ButtonProps, ButtonSize, ButtonVariant } from '@/types/Components';

/**
 * @description 汎用ボタンコンポーネント。variant と size によってスタイルを切り替える。
 * @param props - ボタンの Props（variant, size, disabled, children など）
 * @returns ボタン要素
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   クリック
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', disabled, children, className, ...props }, ref) => {
    // バリアントごとのスタイルマッピング
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-glow',
      secondary:
        'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 shadow-glow-secondary',
      outline:
        'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-950',
      ghost:
        'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
    };

    // サイズごとのスタイルマッピング
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-7 py-3.5 text-lg',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          // 共通スタイル
          'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200',
          // フォーカス時のスタイル
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          // 無効時のスタイル
          'disabled:cursor-not-allowed disabled:opacity-50',
          // ホバー時のスケールアニメーション
          'hover:scale-[1.02] active:scale-[0.98]',
          // バリアントとサイズのスタイルを適用
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

// displayName を設定（React DevTools 用）
Button.displayName = 'Button';
