export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <div>
          <h2
            className="mt-6 text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            出退勤管理システム
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            管理者ログイン
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-[#667eea] focus:outline-none focus:ring-2 focus:ring-[#667eea]"
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                パスワード
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-[#667eea] focus:outline-none focus:ring-2 focus:ring-[#667eea]"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#667eea] focus:ring-offset-2 transition-opacity shadow-md"
            >
              ログイン
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
