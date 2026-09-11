import { useState } from 'react';

import { Search } from 'lucide-react';

import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

import type { SearchBarProps } from '@/types/Components';

/**
 * @description 検索バーコンポーネント。Input と Button を組み合わせた molecule。
 * @param props - 検索バーの Props（placeholder, onSearch）
 * @returns 検索バー要素
 * @example
 * ```tsx
 * <SearchBar
 *   placeholder="キーワードを入力..."
 *   onSearch={(query) => console.log(query)}
 * />
 * ```
 */
export const SearchBar = ({ placeholder = '検索...', onSearch }: SearchBarProps) => {
  // 検索クエリの状態を管理する
  const [query, setQuery] = useState('');

  // フォーム送信時に検索を実行する
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 空白のみの入力を防止する
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2"
      role="search"
      aria-label="サイト内検索"
    >
      {/* 検索入力フィールド */}
      <div className="flex-1">
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="検索キーワード"
        />
      </div>

      {/* 検索実行ボタン */}
      <Button type="submit" variant="primary" size="md" aria-label="検索">
        <Search className="h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  );
};
