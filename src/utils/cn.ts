/**
 * @description クラス名を条件付きで結合するユーティリティ関数
 * @param classes - 結合するクラス名の配列（falsy な値は除外される）
 * @returns 結合されたクラス名の文字列
 */
export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};
