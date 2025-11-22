export default function RequestsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          申請承認 <span className="badge badge-warning ml-2">8件</span>
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          休暇申請・打刻修正申請の承認・却下
        </p>
      </div>

      {/* タブ */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button className="border-b-2 border-[#667eea] px-1 py-4 text-sm font-medium text-[#667eea]">
            承認待ち
          </button>
          <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
            承認済み
          </button>
          <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
            却下
          </button>
        </nav>
      </div>

      {/* 申請カード */}
      <div className="space-y-4">
        {/* 申請カード1: 有給休暇申請 */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-xl">
                👤
              </div>
              <div>
                <div className="font-semibold text-gray-900">山田 太郎</div>
                <div className="text-sm text-gray-500">開発部 / 一般社員</div>
              </div>
            </div>
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
              🏖️ 有給休暇申請
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">申請日</div>
              <div className="text-sm font-semibold text-gray-900">
                2025/11/15
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">取得日</div>
              <div className="text-sm font-semibold text-gray-900">
                2025/11/25 - 26
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">残有給日数</div>
              <div className="text-sm font-semibold text-gray-900">12日</div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg mb-4">
            <div className="text-xs text-gray-500 mb-2">申請理由</div>
            <div className="text-sm text-gray-900 leading-relaxed">
              家族の結婚式に出席するため、2日間のお休みをいただきたくお願い申し上げます。
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-6 py-2 bg-white border-2 border-red-500 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-50 transition-colors">
              却下
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#4caf50] to-[#81c784] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              承認
            </button>
          </div>
        </div>

        {/* 申請カード2: 打刻修正申請 */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-xl">
                👤
              </div>
              <div>
                <div className="font-semibold text-gray-900">鈴木 次郎</div>
                <div className="text-sm text-gray-500">人事部 / 一般社員</div>
              </div>
            </div>
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
              ✏️ 打刻修正申請
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">対象日</div>
              <div className="text-sm font-semibold text-gray-900">
                2025/11/14
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">修正内容</div>
              <div className="text-sm font-semibold text-gray-900">
                出勤 09:00 → 08:30
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">GPS記録</div>
              <div className="text-sm font-semibold text-gray-900">
                📍 08:28 オフィス付近
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg mb-4">
            <div className="text-xs text-gray-500 mb-2">申請理由</div>
            <div className="text-sm text-gray-900 leading-relaxed">
              打刻を失念しておりました。GPSログにて出勤時刻の確認をお願いいたします。
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-6 py-2 bg-white border-2 border-red-500 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-50 transition-colors">
              却下
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#4caf50] to-[#81c784] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              承認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
