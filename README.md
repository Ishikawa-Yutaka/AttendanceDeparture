# 出退勤管理システム

従業員の勤怠管理を効率化し、労働基準法に準拠した客観的な労働時間の記録・管理を実現するシステムです。

## 📋 プロジェクト概要

- **従業員向けモバイルアプリ**: 出退勤打刻、勤怠確認、各種申請
- **管理者向けPC Web画面**: 勤怠管理、集計、承認、データ出力

## 🛠️ 技術スタック

### フロントエンド
- **モバイルアプリ**: React Native (Expo) + TypeScript
- **管理画面**: Next.js 14+ (App Router) + TypeScript + Tailwind CSS

### バックエンド
- **API**: Next.js API Routes / Server Actions
- **ORM**: Prisma
- **BaaS**: Supabase (認証・リアルタイム機能・ストレージ)

### データベース
- **メインDB**: PostgreSQL (Supabase)

### デプロイ
- **管理画面**: Vercel
- **モバイルアプリ**: EAS (Expo Application Services)
- **データベース**: Supabase Cloud

## 📁 プロジェクト構成

```
AttendanceDeparture/
├── mobile/          # React Native (Expo) アプリ
├── web/             # Next.js 管理画面
├── packages/        # 共有パッケージ（型定義等）
├── docs/            # ドキュメント
└── README.md
```

## 🚀 セットアップ

### 前提条件
- Node.js 18以降
- npm または yarn
- Git

### インストール

```bash
# モバイルアプリ
cd mobile
npm install

# 管理画面
cd ../web
npm install
```

## 📚 ドキュメント

- [要件定義書](./出退勤管理システム_要件定義書.docx)
- [開発手順書](./開発手順書.md)
- [進捗状況表](./進捗状況表.md)

## 📝 開発フェーズ

1. **プロジェクト準備** (1週間) - 現在のフェーズ
2. **設計** (1.5ヶ月)
3. **開発** (4.5ヶ月)
4. **統合** (2週間)
5. **テスト** (1ヶ月)
6. **リリース準備** (2週間)
7. **MVP運用開始**

## 🔗 リンク

- GitHub: https://github.com/Ishikawa-Yutaka/AttendanceDeparture

## 📄 ライセンス

未定

