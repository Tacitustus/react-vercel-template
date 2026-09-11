# react-vercel-template

> AIエージェントが Web アプリを高速開発するための React + Vite + TailwindCSS テンプレートリポジトリ。

[![CI](https://github.com/YOUR_USERNAME/react-vercel-template/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/react-vercel-template/actions/workflows/ci.yml)

## 🎯 このリポジトリについて

このリポジトリは **GitHub の Public Template リポジトリ** として利用されることを想定しています。  
「Use this template」ボタンから新しいリポジトリを作成し、`npm run setup` でプロジェクト情報を一括更新することで、すぐに開発を開始できます。

### 含まれるもの

- ⚡ **Vite** — 爆速の開発サーバーとビルド
- ⚛️ **React 18+ (TypeScript)** — 厳格モードによる型安全な開発
- 🎨 **TailwindCSS v3+** — ユーティリティファーストの CSS フレームワーク
- 🧭 **React Router v6+** — SPA ルーティング
- 🐻 **Zustand** — 軽量な状態管理
- 🎯 **アトミックデザイン** — 5階層のコンポーネント設計
- 🌙 **ダークモード対応** — システム設定連動
- 📱 **レスポンシブデザイン** — モバイルファースト
- 🔍 **ESLint + Prettier** — コード品質の自動チェック
- 🚀 **Vercel デプロイ対応** — ゼロコンフィグデプロイ
- 🤖 **AGENTS.md** — AI エージェント向け行動指示書
- 📋 **BLUEPRINT.md** — プロジェクト仕様書テンプレート

---

## 🚀 セットアップ

### 1. テンプレートからリポジトリを作成

GitHub で「**Use this template**」ボタンをクリックし、新しいリポジトリを作成します。

### 2. クローン

```bash
git clone https://github.com/YOUR_USERNAME/your-new-project.git
cd your-new-project
```

### 3. 依存関係のインストール

```bash
npm install
```

### 4. プロジェクト情報の一括更新

```bash
npm run setup
```

対話形式で新しいプロジェクト名を入力すると、以下のファイルが自動で更新されます：

- `package.json` の `name`
- `index.html` の `<title>`
- `BLUEPRINT.md` 内のプロジェクト名
- `README.md` 内のプロジェクト名

---

## 💻 開発コマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | プロダクションビルド |
| `npm run preview` | ビルド結果のプレビュー |
| `npm run lint` | ESLint によるコードチェック |
| `npm run format` | Prettier によるコードフォーマット |
| `npm run setup` | プロジェクト情報の一括更新 |

---

## 📁 ディレクトリ構成

```
src/
├── components/
│   ├── atoms/          # 最小UI部品（Button, Input）
│   ├── molecules/      # atomsの組み合わせ（SearchBar）
│   ├── organisms/      # 複雑なUIセクション（Header）
│   ├── templates/      # ページレイアウト（DefaultLayout）
│   └── pages/          # ルート対応ページ（HomePage）
├── hooks/              # カスタムフック
├── stores/             # Zustand ストア
├── utils/              # ユーティリティ関数
├── types/              # 型定義
├── styles/             # グローバルスタイル
├── constants/          # 定数定義
├── App.tsx             # ルートコンポーネント
├── main.tsx            # エントリーポイント
└── vite-env.d.ts       # Vite 型定義
```

---

## 🚢 Vercel デプロイ

### 自動デプロイの設定手順

1. [Vercel](https://vercel.com) にログインする
2. 「**Import Project**」から GitHub リポジトリを選択する
3. Framework Preset: **Vite** を選択する
4. 「**Deploy**」をクリックする

以降、`main` ブランチへの push で自動的にデプロイが実行されます。

---

## 📝 ドキュメント

| ファイル | 説明 |
|---------|------|
| [BLUEPRINT.md](./BLUEPRINT.md) | プロジェクト仕様書 |
| [.agents/AGENTS.md](./.agents/AGENTS.md) | AI エージェント行動指示書 |

---

## ライセンス

MIT
