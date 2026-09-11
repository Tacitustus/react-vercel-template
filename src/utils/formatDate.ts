/**
 * @description 日付を日本語のフォーマットに変換するユーティリティ関数
 * @param date - フォーマットする日付オブジェクト
 * @param options - Intl.DateTimeFormat のオプション
 * @returns フォーマットされた日付文字列
 */
export const formatDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions,
): string => {
  // デフォルトのフォーマットオプションを設定する
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  // 日本語ロケールで日付をフォーマットする
  return new Intl.DateTimeFormat('ja-JP', defaultOptions).format(date);
};
