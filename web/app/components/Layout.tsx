"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "ダッシュボード", href: "/dashboard", icon: "📊" },
  { name: "勤怠管理", href: "/attendance", icon: "📅" },
  { name: "申請管理", href: "/requests", icon: "📝" },
  { name: "集計・レポート", href: "/reports", icon: "📈" },
  { name: "基本設定", href: "/settings", icon: "⚙️" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* サイドバー */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900">
        <div className="flex h-16 items-center border-b border-gray-800 px-6">
          <h1
            className="text-xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            勤怠管理システム
          </h1>
        </div>
        <nav className="mt-6 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 w-full border-t border-gray-800 p-4">
          <button className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors">
            ログアウト
          </button>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="pl-64">
        {/* ヘッダー */}
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold text-gray-900">管理画面</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-semibold">
                👤
              </div>
              <span className="text-sm text-gray-600">管理者</span>
            </div>
          </div>
        </header>

        {/* ページコンテンツ */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
