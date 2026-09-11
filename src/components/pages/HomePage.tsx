import { ArrowRight, Code2, Layers, Rocket, Zap } from 'lucide-react';

import { Button } from '@/components/atoms/Button';
import { APP_DESCRIPTION, APP_NAME } from '@/constants/app';

/**
 * @description ホームページコンポーネント。グラデーション背景とグラスモーフィズムカードを使用した
 * ウェルカムページ。テンプレートの使い方を案内する。
 * @returns ホームページ要素
 * @example
 * ```tsx
 * <Route path="/" element={<HomePage />} />
 * ```
 */
export const HomePage = () => {
  // フィーチャーカードのデータを定義する
  const features = [
    {
      icon: <Zap className="h-6 w-6" aria-hidden="true" />,
      title: '超高速開発',
      description: 'Vite + React + TypeScript による爆速の開発体験。HMRで即座にフィードバック。',
    },
    {
      icon: <Layers className="h-6 w-6" aria-hidden="true" />,
      title: 'アトミックデザイン',
      description: 'atoms → molecules → organisms → templates → pages の5階層で保守性の高い設計。',
    },
    {
      icon: <Code2 className="h-6 w-6" aria-hidden="true" />,
      title: '厳格な型安全',
      description: 'TypeScript 厳格モード + ESLint で any を完全に排除。堅牢なコードベース。',
    },
    {
      icon: <Rocket className="h-6 w-6" aria-hidden="true" />,
      title: 'Vercel デプロイ',
      description: 'Vercel 連携によるゼロコンフィグデプロイ。プッシュするだけで本番環境に反映。',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 背景のグラデーションとデコレーション */}
      <div className="absolute inset-0 -z-10">
        {/* メインのグラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-surface-dark dark:to-primary-950" />
        {/* 装飾用の円形グラデーション */}
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-600/10" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl dark:bg-secondary-600/10" />
        <div className="absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-accent-400/10 blur-3xl dark:bg-accent-600/5" />
      </div>

      {/* ヒーローセクション */}
      <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* バッジ */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
            <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
            テンプレートリポジトリ
          </div>

          {/* メインタイトル */}
          <h1 className="animate-slide-up mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{APP_NAME}</span>
          </h1>

          {/* サブタイトル */}
          <p className="animate-slide-up mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            {APP_DESCRIPTION}
            <br />
            AIエージェントが Web アプリを高速開発するための、
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              プロダクションレディ
            </span>
            なひな形。
          </p>

          {/* CTA ボタン群 */}
          <div className="animate-slide-up flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg">
              はじめる
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg">
              ドキュメントを見る
            </Button>
          </div>
        </div>
      </section>

      {/* フィーチャーセクション */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* アイコン */}
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-3 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* タイトル */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>

                {/* 説明文 */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
