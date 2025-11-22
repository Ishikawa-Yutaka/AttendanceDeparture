export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ダッシュボード</h1>
        <p className="mt-2 text-sm text-gray-600">
          リアルタイム勤怠状況とアラート一覧
        </p>
      </div>

      {/* KPIカード */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="text-sm font-medium text-gray-500 mb-2">
            本日の出勤者数
          </div>
          <div className="text-3xl font-bold text-gray-900">42</div>
          <div className="text-xs text-gray-500 mt-1">/ 50名</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="text-sm font-medium text-gray-500 mb-2">未打刻者</div>
          <div className="text-3xl font-bold text-orange-500">3</div>
          <div className="text-xs text-orange-500 mt-1">要確認</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="text-sm font-medium text-gray-500 mb-2">
            承認待ち申請
          </div>
          <div className="text-3xl font-bold text-gray-900">8</div>
          <div className="text-xs text-gray-500 mt-1">件</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="text-sm font-medium text-gray-500 mb-2">アラート</div>
          <div className="text-3xl font-bold text-red-500">2</div>
          <div className="text-xs text-red-500 mt-1">要対応</div>
        </div>
      </div>

      {/* 重要なアラート */}
      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>⚠️</span>
          重要なアラート
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <span className="text-xl">🚨</span>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <strong>佐藤一郎</strong>さんの月間残業時間が
                <strong>45時間</strong>を超過しています
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs font-semibold rounded-md hover:opacity-90 transition-opacity">
              詳細
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <span className="text-xl">⏰</span>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <strong>田中花子</strong>さんが本日未打刻です（10:00経過）
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs font-semibold rounded-md hover:opacity-90 transition-opacity">
              確認
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <span className="text-xl">😴</span>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <strong>鈴木次郎</strong>
                さんの勤務間インターバルが11時間未満です
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs font-semibold rounded-md hover:opacity-90 transition-opacity">
              詳細
            </button>
          </div>
        </div>
      </div>

      {/* 本日の勤怠状況テーブル */}
      <div className="rounded-xl bg-white shadow-md overflow-hidden">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            本日の勤怠状況
          </h2>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="🔍 検索..."
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#667eea]"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-sm font-semibold rounded-md hover:opacity-90 transition-opacity">
              CSV出力
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  社員名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  部署
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  出勤時刻
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  退勤時刻
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  勤務時間
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  ステータス
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  山田 太郎
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  開発部
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  09:30
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  7h02m
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="badge badge-success">勤務中</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  田中 花子
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  営業部
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="badge badge-warning">未打刻</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  鈴木 次郎
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  人事部
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  08:45
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  17:30
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  8h45m
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="badge badge-info">退勤済み</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  佐藤 一郎
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  開発部
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  09:00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  8h32m
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="badge badge-danger">残業中</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
