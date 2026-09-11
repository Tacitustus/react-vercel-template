import { forwardRef } from 'react';

import { cn } from '@/utils/cn';

import type { InputProps } from '@/types/Components';

/**
 * @description 汎用インプットコンポーネント。ラベルとエラーメッセージの表示に対応する。
 * @param props - インプットの Props（label, error, placeholder など）
 * @returns インプット要素（ラベル・エラーメッセージ付き）
 * @example
 * ```tsx
 * <Input
 *   label="メールアドレス"
 *   placeholder="example@email.com"
 *   error="正しいメールアドレスを入力してください"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    // ラベルとインプットを紐づけるための ID を生成する
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        {/* ラベルの表示 */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}

        {/* インプットフィールド */}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            // 基本スタイル
            'rounded-xl border bg-white/80 px-4 py-2.5 text-gray-900 backdrop-blur-sm',
            // ダークモード時のスタイル
            'dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-100',
            // フォーカス時のスタイル
            'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
            // トランジション
            'transition-all duration-200',
            // エラー時のスタイル
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300',
            // プレースホルダーのスタイル
            'placeholder:text-gray-400 dark:placeholder:text-gray-500',
            className,
          )}
          {...props}
        />

        {/* エラーメッセージの表示 */}
        {error && (
          <p className="text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

// displayName を設定（React DevTools 用）
Input.displayName = 'Input';
