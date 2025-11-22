# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

出退勤管理システム (Attendance Management System) - Employee attendance tracking with Japanese labor law compliance.

- **Mobile App** (`mobile/`): React Native (Expo) - Employee clock in/out, leave requests
- **Web Admin** (`web/`): Next.js 16 - Manager dashboard, approvals, reports

## Common Commands

### Web (Admin Dashboard)
```bash
cd web
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

### Mobile (Employee App)
```bash
cd mobile
npm start        # Start Expo dev server
npm run ios      # Launch iOS simulator
npm run android  # Launch Android simulator
```

### Database (Prisma)
```bash
cd web
npx prisma migrate dev    # Run migrations
npx prisma generate       # Generate client after schema changes
npx prisma studio         # GUI for database inspection
```

## Tech Stack

| Component | Technology |
|-----------|------------|
| Web Framework | Next.js 16 (App Router) + React 19 |
| Mobile Framework | React Native 0.81 + Expo 54 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 |
| ORM | Prisma 7 |
| Database | PostgreSQL (Supabase) |
| Auth/Backend | Supabase |

## Project Structure

```
AttendanceDeparture/
├── mobile/              # React Native (Expo) employee app
│   └── App.tsx          # Entry point
├── web/                 # Next.js admin dashboard
│   ├── app/
│   │   ├── (dashboard)/ # Authenticated routes (route group)
│   │   │   ├── dashboard/    # Main dashboard
│   │   │   ├── attendance/   # Attendance management
│   │   │   ├── requests/     # Request approvals
│   │   │   ├── reports/      # Reports & aggregation
│   │   │   ├── settings/     # System settings
│   │   │   └── layout.tsx    # Shared sidebar + header
│   │   ├── login/       # Login page (outside auth)
│   │   └── components/  # Shared components
│   └── prisma/
│       └── schema.prisma
├── packages/            # Shared type definitions
│   └── src/types.ts
└── docs/                # Documentation (ER diagram, dev guide)
```

## Architecture

### Database Schema (Prisma)
Core models in `web/prisma/schema.prisma`:

| Model | Purpose |
|-------|---------|
| Employee | User master with roles (EMPLOYEE/MANAGER/ADMIN) |
| WorkPattern | Work schedule templates (start/end times, breaks) |
| Attendance | Daily clock records with GPS coordinates |
| Break | Multiple breaks per attendance record |
| Request | Correction/leave requests (PENDING/APPROVED/REJECTED) |
| Approval | Approval history with comments |
| PaidLeave | Annual paid leave by year |
| AuditLog | Compliance audit trail (JSON change tracking) |
| Holiday | National holidays |
| LaborAgreement | 36-agreement overtime limits (Phase 2) |

Key relationships:
- Employee (1) → (N) Attendance, Request
- Attendance (1) → (N) Break
- Request (1) → (N) Approval

### Web App Routing
Uses Next.js App Router with route groups:
- `(dashboard)/*` routes share a layout with sidebar navigation
- `/login` is outside the dashboard group (no auth required)

### Shared Types
`packages/src/types.ts` contains TypeScript interfaces shared between mobile and web apps.

## Environment Variables

Required in `web/.env`:
```
DATABASE_URL="postgresql://..."  # Supabase PostgreSQL connection
```

## UI Design

Color scheme (defined in `web/app/globals.css`):
- Primary: Linear gradient (#667eea → #764ba2)
- Success: #4caf50
- Warning: #ff9800
- Danger: #f44336
- Info: #2196f3

## Coding Guidelines

### 説明スタイル
- このプロジェクトの開発者は初心者のため、丁寧で分かりやすい説明を心がける
- 専門用語を使う場合は、その意味も併せて説明する
- 処理の流れや理由（なぜそうするのか）を明確に説明する

### コメントアウト
- コード内のコメントは丁寧に記述する
- 関数やコンポーネントには、その役割と処理内容を説明するコメントを付ける
- 複雑な処理には、ステップごとにコメントを入れる
- 日本語でコメントを記述する

### 絵文字
- コード内およびドキュメント内で絵文字は使用しない

### リファクタリング
- リファクタリングを行う前に、同様のパターンが他の箇所にも存在しないか必ず調査する
- 同じリファクタリングが適用できる箇所がある場合は、まとめて対応する
- 変更箇所と理由を明確に説明する