# AI エージェント行動指示書

このドキュメントは、AI エージェントがこのプロジェクトで開発を行う際に遵守すべきルールと規約を定義する。

---

## コーディング規約

### TypeScript
- TypeScript 厳格モード（`strict: true`）を使用する
- **`any` 型の使用は一切禁止**。`unknown` + 型ガードを用いること
- `eslint-disable-next-line` 等による Lint 警告の無視は原則禁止（根本的にコードを修正すること）

### 関数定義
- 関数はすべてアロー関数で定義する（`export const MyComponent = () => {}` 形式）

### コメント
- コメントは処理単位で非常に細かく親切に**日本語**で書く
  - 例: `// ユーザー一覧を取得し、アクティブなユーザーのみをフィルタリングする`

### JSDoc
- 以下の単位で必ず記述する：
  - すべてのコンポーネント（`@description`, `@param`, `@returns`, `@example`）
  - すべてのカスタムフック（`@description`, `@returns`, `@example`）
  - すべての汎用ユーティリティ関数（`@description`, `@param`, `@returns`）
  - 型定義（`@description`）

### インポート順序
1. React
2. 外部ライブラリ
3. 内部モジュール（絶対パス `@/`）
4. 相対パス
5. 型（`type` インポート）
6. スタイル

### パスエイリアス
- `@/` → `src/` のパスエイリアスを使用する

---

## デザイン規約

### アトミックデザイン
- 5階層を厳守する：
  - `atoms/` — ボタン、インプットなどの最小UI部品
  - `molecules/` — atoms の組み合わせ（検索バーなど）
  - `organisms/` — 複雑なUIセクション（ヘッダー、フォームなど）
  - `templates/` — ページレイアウトの骨格
  - `pages/` — 各ルートに対応するページコンポーネント

### スタイリング
- TailwindCSS のユーティリティクラスを優先し、カスタム CSS は最小限にする
- ダークモード対応を考慮した設計にする（TailwindCSS の `dark:` プレフィックス）
- レスポンシブデザインを前提とする（モバイルファースト）

### デザインテイスト
- モダンで洗練されたデザイン
- グラスモーフィズム、グラデーション、マイクロアニメーションを適切に活用する
- カラーパレットは `tailwind.config.ts` で一元管理する

---

## ファイル命名規約

| 種別 | 命名規則 | 例 |
|------|----------|-----|
| コンポーネント | PascalCase | `UserCard.tsx` |
| フック | camelCase, `use` プレフィックス | `useAuth.ts` |
| ユーティリティ | camelCase | `formatDate.ts` |
| 型定義 | PascalCase | `User.ts` |
| 定数 | camelCase（ファイル名）、`UPPER_SNAKE_CASE`（エクスポート名） | `app.ts` → `export const APP_NAME` |

---

## テスト規約

- 新規コンポーネントには必ず基本的なレンダリングテストを書くこと（Vitest + React Testing Library）

---

## Git 規約

- コミットメッセージは Conventional Commits に従う
  - `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- 日本語の説明を括弧内に添える
  - 例: `feat: add login form (ログインフォームを追加)`

---

## タスク完了時の確認事項（必須）

タスクが完了したら、以下を必ず実施すること：

1. `BLUEPRINT.md` を再読し、仕様との乖離がないことを確認する
2. `AGENTS.md`（本ファイル）を再読し、コーディング規約・デザイン規約・命名規約をすべて守れていることを確認する
3. ESLint / Prettier エラーが 0 件であることを確認する（`npm run lint` で確認）
4. TypeScript コンパイルエラーが 0 件であることを確認する（`npx tsc --noEmit` で確認）
5. ビルドが成功することを確認する（`npm run build` で確認）
6. 以下の形式で報告する：

```
## ✅ タスク完了報告
### 修正内容
- （変更点を箇条書き）

### 仕様書チェック（BLUEPRINT.md）
- ✅ / ❌ 各要件の適合状況

### コーディング規約チェック（AGENTS.md）
- ✅ any 未使用
- ✅ eslint-disable 等による警告無視なし
- ✅ アロー関数のみ使用
- ✅ JSDoc 記述済み
- ✅ 日本語コメント記述済み
- ✅ アトミックデザイン準拠
- ✅ ESLint エラー 0 件
- ✅ Prettier フォーマット済み
- ✅ TypeScript コンパイルエラー 0 件
- ✅ ビルド成功
```
