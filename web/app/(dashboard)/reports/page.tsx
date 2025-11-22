export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">集計・レポート</h1>
        <p className="mt-2 text-sm text-gray-600">
          月次集計、時間外労働管理、CSV出力
        </p>
      </div>

      {/* 期間選択 */}
      <div className="rounded-xl bg-white p-4 shadow-md">
        <div className="flex gap-4">
          <input
            type="month"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#667eea]"
          />
          <button className="px-6 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            集計実行
          </button>
          <button className="px-6 py-2 border border-gray-300 bg-white text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            CSV出力
          </button>
        </div>
      </div>

      {/* KPIカード */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="text-sm font-medium text-gray-500 mb-2">
            平均労働時間
          </div>
          <div className="text-3xl font-bold text-gray-900">168h</div>
          <div className="text-xs text-green-500 mt-1">前月比 +2h</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="text-sm font-medium text-gray-500 mb-2">
            平均残業時間
          </div>
          <div className="text-3xl font-bold text-gray-900">18h</div>
          <div className="text-xs text-green-500 mt-1">前月比 -3h</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="text-sm font-medium text-gray-500 mb-2">
            有給取得率
          </div>
          <div className="text-3xl font-bold text-gray-900">65%</div>
          <div className="text-xs text-gray-500 mt-1">目標 70%</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="text-sm font-medium text-gray-500 mb-2">
            遅刻・早退
          </div>
          <div className="text-3xl font-bold text-gray-900">12</div>
          <div className="text-xs text-gray-500 mt-1">件</div>
        </div>
      </div>

      {/* 集計結果 */}
      <div className="rounded-xl bg-white shadow-md overflow-hidden">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            社員別勤怠サマリー
          </h2>
          <div className="flex gap-3">
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#667eea]">
              <option>全部署</option>
              <option>開発部</option>
              <option>営業部</option>
              <option>人事部</option>
            </select>
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Excel出力
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
                  出勤日数
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  労働時間
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  残業時間
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  有給使用
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  遅刻/早退
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  ステータス
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-8 text-center text-sm text-gray-500"
                >
                  データがありません
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
