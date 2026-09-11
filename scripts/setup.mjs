#!/usr/bin/env node

/**
 * プロジェクト初期化スクリプト
 *
 * テンプレートリポジトリから新しいプロジェクトを作成した後に実行する。
 * 対話形式でプロジェクト名を入力し、各種ファイルのプロジェクト名を一括置換する。
 *
 * 使用方法:
 *   npm run setup
 *   npm run setup -- --name my-new-project
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

// 現在のディレクトリを取得する
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = resolve(__dirname, '..');

// 置換元のテンプレート名
const TEMPLATE_NAME = 'react-vercel-template';

// 置換対象のファイル一覧
const TARGET_FILES = [
  'package.json',
  'index.html',
  'BLUEPRINT.md',
  'README.md',
  'src/constants/app.ts',
];

/**
 * 対話形式でユーザー入力を取得する
 * @param {string} question - ユーザーに表示する質問
 * @returns {Promise<string>} ユーザーの入力値
 */
const askQuestion = (question) => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
};

/**
 * ファイル内のテンプレート名を新しいプロジェクト名に置換する
 * @param {string} filePath - 対象ファイルのパス
 * @param {string} newName - 新しいプロジェクト名
 */
const replaceInFile = (filePath, newName) => {
  const absolutePath = resolve(ROOT_DIR, filePath);

  try {
    // ファイルの内容を読み込む
    const content = readFileSync(absolutePath, 'utf-8');

    // テンプレート名を新しい名前に置換する
    const updatedContent = content.replaceAll(TEMPLATE_NAME, newName);

    // 変更がある場合のみファイルを書き込む
    if (content !== updatedContent) {
      writeFileSync(absolutePath, updatedContent, 'utf-8');
      console.log(`  ✅ ${filePath}`);
    } else {
      console.log(`  ⏭️  ${filePath} (変更なし)`);
    }
  } catch (error) {
    console.error(`  ❌ ${filePath}: ${error.message}`);
  }
};

/**
 * メイン処理
 */
const main = async () => {
  console.log('\n🚀 プロジェクト初期化スクリプト\n');

  // コマンドライン引数からプロジェクト名を取得する
  const args = process.argv.slice(2);
  const nameArgIndex = args.indexOf('--name');
  let projectName =
    nameArgIndex !== -1 ? args[nameArgIndex + 1] : undefined;

  // 引数がない場合は対話形式で入力を求める
  if (!projectName) {
    projectName = await askQuestion(
      `新しいプロジェクト名を入力してください (現在: ${TEMPLATE_NAME}): `,
    );
  }

  // 入力が空の場合は中止する
  if (!projectName) {
    console.log('\n❌ プロジェクト名が入力されませんでした。中止します。\n');
    process.exit(1);
  }

  // テンプレート名と同じ場合は中止する
  if (projectName === TEMPLATE_NAME) {
    console.log('\n⚠️  テンプレート名と同じです。変更の必要がありません。\n');
    process.exit(0);
  }

  console.log(`\n📝 "${TEMPLATE_NAME}" → "${projectName}" に置換します...\n`);

  // 各ファイルのプロジェクト名を置換する
  for (const file of TARGET_FILES) {
    replaceInFile(file, projectName);
  }

  console.log('\n✅ プロジェクトの初期化が完了しました！\n');
  console.log('次のステップ:');
  console.log('  1. BLUEPRINT.md にプロジェクトの仕様を記述する');
  console.log('  2. npm run dev で開発サーバーを起動する');
  console.log('  3. Vercel にデプロイする\n');
};

main().catch(console.error);
